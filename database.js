const sql = require('mssql');
const config = require('./dbConfig');

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth()+1;
const hour = currentDate.getHours();
const date = (hour < 10) ? currentDate.getDate()-1 : currentDate.getDate();
const now = `${month}-${date}-${year} `;

// get data cam productions
async function getDataCam() {
    try {
        const query = "/* SELECT * FROM OFPR T0 */ /* SELECT * FROM [@MASTERMESIN] Y  */ Declare @StartDate Date Declare @EndDate Date  declare @GroupMsn nvarchar(40) if isnull(@GroupMsn,'')='' SET @GroupMsn = 'All' SELECT TOP 1 avg(x.CmpltQty/x.PlannedQty) * 100 'percen' FROM OWOR T0 LEFT JOIN WOR1 T1 ON T0.[DocEntry] = T1.[DocEntry] LEFT JOIN [@MASTERMESIN] Y on T0.U_MIS_NoMesin = Y.Code cross JOIN (Select SUM(A.CmpltQty) CmpltQty , sum(A.PlannedQty) PlannedQty from OWOR A LEFT JOIN [@MASTERMESIN] Y on A.U_MIS_NoMesin = Y.Code where A.[UserSign] =19 and A.[Warehouse] = 'WHWIPMF1' and Y.U_MIS_CodeGroup='CAM'  and A.[Status] not in ('C') and A.[PostDate] >= '" + now + "' and A.[PostDate] <= '" + now + "' and case when isnull (@GroupMsn , 'ALL') = 'ALL' then '1' else y.U_MIS_CodeGroup end = case when isnull(@GroupMsn,'All')='ALL' then '1' else @GroupMsn end) X WHERE T0.[UserSign] in (19,22,21) and T0.[Warehouse] = 'WHWIPMF1' and Y.U_MIS_CodeGroup='CAM' and T0.[Status] not in ('C') and T0.[PostDate] >= '" + now + "' and T0.[PostDate] <= '" + now + "'  and case when isnull (@GroupMsn , 'ALL') = 'ALL' then '1' else y.U_MIS_CodeGroup end = case when isnull(@GroupMsn,'All')='ALL' then '1' else @GroupMsn end Group by T0.[U_MIS_NoMesin], Y.U_MIS_CodeGroup, T0.[DocNum], T0.[PostDate], T0.[ItemCode], T0.[PlannedQty], T0.[CmpltQty], T0.[Warehouse], T0.[U_MIS_NextProc], T0.[Status], T0.[UserSign] Order by Y.U_MIS_CodeGroup asc";

        await sql.connect(config);
        let result = await sql.query(query);

        return result.recordset;
    } catch (error) {
        console.error();
        return error;
    }
}

// get data cnc 1 productions
async function getDataCncSatu() {
    try {
        const query = "/* SELECT * FROM OFPR T0 */ /* SELECT * FROM [@MASTERMESIN] Y  */ Declare @StartDate Date Declare @EndDate Date  declare @GroupMsn nvarchar(40) if isnull(@GroupMsn,'')='' SET @GroupMsn = 'All' SELECT TOP 1 avg(x.CmpltQty/x.PlannedQty) * 100 'percen' FROM OWOR T0 LEFT JOIN WOR1 T1 ON T0.[DocEntry] = T1.[DocEntry] LEFT JOIN [@MASTERMESIN] Y on T0.U_MIS_NoMesin = Y.Code cross JOIN (Select SUM(A.CmpltQty) CmpltQty , sum(A.PlannedQty) PlannedQty from OWOR A LEFT JOIN [@MASTERMESIN] Y on A.U_MIS_NoMesin = Y.Code where A.[UserSign] =19 and A.[Warehouse] = 'WHWIPMF1' and Y.U_MIS_CodeGroup='LINE1'  and A.[Status] not in ('C') and A.[PostDate] >= '" + now + "' and A.[PostDate] <= '" + now + "' and case when isnull (@GroupMsn , 'ALL') = 'ALL' then '1' else y.U_MIS_CodeGroup end = case when isnull(@GroupMsn,'All')='ALL' then '1' else @GroupMsn end) X WHERE T0.[UserSign] in (19,22,21) and T0.[Warehouse] = 'WHWIPMF1' and Y.U_MIS_CodeGroup='LINE1' and T0.[Status] not in ('C') and T0.[PostDate] >= '" + now + "' and T0.[PostDate] <= '" + now + "'  and case when isnull (@GroupMsn , 'ALL') = 'ALL' then '1' else y.U_MIS_CodeGroup end = case when isnull(@GroupMsn,'All')='ALL' then '1' else @GroupMsn end Group by T0.[U_MIS_NoMesin], Y.U_MIS_CodeGroup, T0.[DocNum], T0.[PostDate], T0.[ItemCode], T0.[PlannedQty], T0.[CmpltQty], T0.[Warehouse], T0.[U_MIS_NextProc], T0.[Status], T0.[UserSign] Order by Y.U_MIS_CodeGroup asc";

        await sql.connect(config);
        let result = await sql.query(query);

        return result.recordset;
    } catch (error) {
        console.error();
        return error;
    }
}

// get data cnc 2 productions
async function getDataCncDua() {
    try {
        const query = "/* SELECT * FROM OFPR T0 */ /* SELECT * FROM [@MASTERMESIN] Y  */ Declare @StartDate Date Declare @EndDate Date  declare @GroupMsn nvarchar(40) if isnull(@GroupMsn,'')='' SET @GroupMsn = 'All' SELECT TOP 1 avg(x.CmpltQty/x.PlannedQty) * 100 'percen' FROM OWOR T0 LEFT JOIN WOR1 T1 ON T0.[DocEntry] = T1.[DocEntry] LEFT JOIN [@MASTERMESIN] Y on T0.U_MIS_NoMesin = Y.Code cross JOIN (Select SUM(A.CmpltQty) CmpltQty , sum(A.PlannedQty) PlannedQty from OWOR A LEFT JOIN [@MASTERMESIN] Y on A.U_MIS_NoMesin = Y.Code where A.[UserSign] =19 and A.[Warehouse] = 'WHWIPMF1' and Y.U_MIS_CodeGroup='LINE2'  and A.[Status] not in ('C') and A.[PostDate] >= '" + now + "' and A.[PostDate] <= '" + now + "' and case when isnull (@GroupMsn , 'ALL') = 'ALL' then '1' else y.U_MIS_CodeGroup end = case when isnull(@GroupMsn,'All')='ALL' then '1' else @GroupMsn end) X WHERE T0.[UserSign] in (19,22,21) and T0.[Warehouse] = 'WHWIPMF1' and Y.U_MIS_CodeGroup='LINE2' and T0.[Status] not in ('C') and T0.[PostDate] >= '" + now + "' and T0.[PostDate] <= '" + now + "'  and case when isnull (@GroupMsn , 'ALL') = 'ALL' then '1' else y.U_MIS_CodeGroup end = case when isnull(@GroupMsn,'All')='ALL' then '1' else @GroupMsn end Group by T0.[U_MIS_NoMesin], Y.U_MIS_CodeGroup, T0.[DocNum], T0.[PostDate], T0.[ItemCode], T0.[PlannedQty], T0.[CmpltQty], T0.[Warehouse], T0.[U_MIS_NextProc], T0.[Status], T0.[UserSign] Order by Y.U_MIS_CodeGroup asc";

        await sql.connect(config);
        let result = await sql.query(query);

        return result.recordset;
    } catch (error) {
        console.error();
        return error;
    }
}

// get data cnc 3 productions
async function getDataCncTiga() {
    try {
        const query = "/* SELECT * FROM OFPR T0 */ /* SELECT * FROM [@MASTERMESIN] Y  */ Declare @StartDate Date Declare @EndDate Date  declare @GroupMsn nvarchar(40) if isnull(@GroupMsn,'')='' SET @GroupMsn = 'All' SELECT TOP 1 avg(x.CmpltQty/x.PlannedQty) * 100 'percen' FROM OWOR T0 LEFT JOIN WOR1 T1 ON T0.[DocEntry] = T1.[DocEntry] LEFT JOIN [@MASTERMESIN] Y on T0.U_MIS_NoMesin = Y.Code cross JOIN (Select SUM(A.CmpltQty) CmpltQty , sum(A.PlannedQty) PlannedQty from OWOR A LEFT JOIN [@MASTERMESIN] Y on A.U_MIS_NoMesin = Y.Code where A.[UserSign] =19 and A.[Warehouse] = 'WHWIPMF1' and Y.U_MIS_CodeGroup='LINE3'  and A.[Status] not in ('C') and A.[PostDate] >= '" + now + "' and A.[PostDate] <= '" + now + "' and case when isnull (@GroupMsn , 'ALL') = 'ALL' then '1' else y.U_MIS_CodeGroup end = case when isnull(@GroupMsn,'All')='ALL' then '1' else @GroupMsn end) X WHERE T0.[UserSign] in (19,22,21) and T0.[Warehouse] = 'WHWIPMF1' and Y.U_MIS_CodeGroup='LINE3' and T0.[Status] not in ('C') and T0.[PostDate] >= '" + now + "' and T0.[PostDate] <= '" + now + "' and case when isnull (@GroupMsn , 'ALL') = 'ALL' then '1' else y.U_MIS_CodeGroup end = case when isnull(@GroupMsn,'All')='ALL' then '1' else @GroupMsn end Group by T0.[U_MIS_NoMesin], Y.U_MIS_CodeGroup, T0.[DocNum], T0.[PostDate], T0.[ItemCode], T0.[PlannedQty], T0.[CmpltQty], T0.[Warehouse], T0.[U_MIS_NextProc], T0.[Status], T0.[UserSign] Order by Y.U_MIS_CodeGroup asc";

        await sql.connect(config);
        let result = await sql.query(query);

        return result.recordset;
    } catch (error) {
        console.error();
        return error;
    }
}

// get data mesin semua line
async function getAllLine() {
    try {
        const query = `SELECT TOP 5
        T0.[U_MIS_NoMesin] as 'mcn',
        Y.U_MIS_CodeGroup 'groupMsn',
        T0.[ItemCode] as 'itemCode',
        T0.[PlannedQty] as 'planQty',
        T0.[CmpltQty] as 'receiveQty',
        T0.[CmpltQty]/T0.[PlannedQty] * 100 as 'percen',
        T0.[Warehouse] as 'wh',
        T0.[U_MIS_NextProc] as 'next'
        FROM OWOR T0
        LEFT JOIN WOR1 T1 ON T0.[DocEntry] = T1.[DocEntry]
        LEFT JOIN [@MASTERMESIN] Y on T0.U_MIS_NoMesin = Y.Code
        cross JOIN (Select SUM(A.CmpltQty) CmpltQty , sum(A.PlannedQty) PlannedQty
                    from OWOR A
                    LEFT JOIN [@MASTERMESIN] Y on A.U_MIS_NoMesin = Y.Code
                    where A.[UserSign] =19 and A.[Warehouse] = 'WHWIPMF1' and A.[Status] not in ('C') and A.[PostDate] >= '${now}' and A.[PostDate] <= '${now}'
                    ) X
        WHERE T0.[UserSign] in (19,22,21) and T0.[Warehouse] = 'WHWIPMF1' and T0.[Status] not in ('C') and T0.[PostDate] >= '${now}' and T0.[PostDate] <= '${now}'

        Group by
        T0.[U_MIS_NoMesin],
        Y.U_MIS_CodeGroup ,
        T0.[DocNum] ,
        T0.[PostDate] ,
        T0.[ItemCode],
        T0.[PlannedQty],
        T0.[CmpltQty] ,
        T0.[Warehouse],
        T0.[U_MIS_NextProc] ,
        T0.[Status] ,
        T0.[UserSign]
        Order by Y.U_MIS_CodeGroup asc`;
        // const query = `SELECT
        // T0.[U_MIS_NoMesin] as 'mcn',
        // Y.U_MIS_CodeGroup 'groupMsn',
        // T0.[ItemCode] as 'itemCode',
        // T0.[PlannedQty] as 'planQty',
        // T0.[CmpltQty] as 'receiveQty',
        // T0.[CmpltQty]/T0.[PlannedQty] * 100 as 'percen',
        // T0.[Warehouse] as 'wh',
        // T0.[U_MIS_NextProc] as 'next'
        // FROM OWOR T0
        // LEFT JOIN WOR1 T1 ON T0.[DocEntry] = T1.[DocEntry]
        // LEFT JOIN [@MASTERMESIN] Y on T0.U_MIS_NoMesin = Y.Code
        // cross JOIN (Select SUM(A.CmpltQty) CmpltQty , sum(A.PlannedQty) PlannedQty
        //             from OWOR A
        //             LEFT JOIN [@MASTERMESIN] Y on A.U_MIS_NoMesin = Y.Code
        //             where A.[UserSign] =19 and A.[Warehouse] = 'WHWIPMF1' and A.[Status] not in ('C') and A.[PostDate] >= '${now}' and A.[PostDate] <= '${now}'
        //             ) X
        // WHERE T0.[UserSign] in (19,22,21) and T0.[Warehouse] = 'WHWIPMF1' and T0.[Status] not in ('C') and T0.[PostDate] >= '${now}' and T0.[PostDate] <= '${now}'

        // Group by
        // T0.[U_MIS_NoMesin],
        // Y.U_MIS_CodeGroup ,
        // T0.[DocNum] ,
        // T0.[PostDate] ,
        // T0.[ItemCode],
        // T0.[PlannedQty],
        // T0.[CmpltQty] ,
        // T0.[Warehouse],
        // T0.[U_MIS_NextProc] ,
        // T0.[Status] ,
        // T0.[UserSign]
        // Order by Y.U_MIS_CodeGroup asc`;

        await sql.connect(config);
        let result = await sql.query(query);

        return result.recordsets;
    } catch (error) {
        console.error();
        return error;
    }
}

// get data mesin line cam
async function getCamLine() {
    try {
        const query = `SELECT TOP 5
        T0.[U_MIS_NoMesin] as 'mcn',
        Y.U_MIS_CodeGroup 'groupMsn',
        T0.[ItemCode] as 'itemCode',
        T0.[PlannedQty] as 'planQty',
        T0.[CmpltQty] as 'receiveQty',
        T0.[CmpltQty]/T0.[PlannedQty] * 100 as 'percen',
        T0.[Warehouse] as 'wh',
        T0.[U_MIS_NextProc] as 'next'
        FROM OWOR T0
        LEFT JOIN WOR1 T1 ON T0.[DocEntry] = T1.[DocEntry]
        LEFT JOIN [@MASTERMESIN] Y on T0.U_MIS_NoMesin = Y.Code
        cross JOIN (Select SUM(A.CmpltQty) CmpltQty , sum(A.PlannedQty) PlannedQty
                    from OWOR A
                    LEFT JOIN [@MASTERMESIN] Y on A.U_MIS_NoMesin = Y.Code
                    where A.[UserSign] =19 and A.[Warehouse] = 'WHWIPMF1' and A.[Status] not in ('C') and A.[PostDate] >= '${now}' and A.[PostDate] <= '${now}'
                    ) X
        WHERE T0.[UserSign] in (19,22,21) and T0.[Warehouse] = 'WHWIPMF1' and T0.[Status] not in ('C') and T0.[PostDate] >= '${now}' and T0.[PostDate] <= '${now}' and Y.U_MIS_CodeGroup = 'CAM'

        Group by
        T0.[U_MIS_NoMesin],
        Y.U_MIS_CodeGroup ,
        T0.[DocNum] ,
        T0.[PostDate] ,
        T0.[ItemCode],
        T0.[PlannedQty],
        T0.[CmpltQty] ,
        T0.[Warehouse],
        T0.[U_MIS_NextProc] ,
        T0.[Status] ,
        T0.[UserSign]
        Order by Y.U_MIS_CodeGroup asc`;

        await sql.connect(config);
        let result = await sql.query(query);

        return result.recordsets;
    } catch (error) {
        console.error();
        return error;
    }
}

async function getLineSatu() {
    try {
        const query = `SELECT
        T0.[U_MIS_NoMesin] as 'mcn',
        Y.U_MIS_CodeGroup 'groupMsn',
        T0.[ItemCode] as 'itemCode',
        T0.[PlannedQty] as 'planQty',
        T0.[CmpltQty] as 'receiveQty',
        T0.[CmpltQty]/T0.[PlannedQty] * 100 as 'percen',
        T0.[Warehouse] as 'wh',
        T0.[U_MIS_NextProc] as 'next'
        FROM OWOR T0
        LEFT JOIN WOR1 T1 ON T0.[DocEntry] = T1.[DocEntry]
        LEFT JOIN [@MASTERMESIN] Y on T0.U_MIS_NoMesin = Y.Code
        cross JOIN (Select SUM(A.CmpltQty) CmpltQty , sum(A.PlannedQty) PlannedQty
                    from OWOR A
                    LEFT JOIN [@MASTERMESIN] Y on A.U_MIS_NoMesin = Y.Code
                    where A.[UserSign] =19 and A.[Warehouse] = 'WHWIPMF1' and A.[Status] not in ('C') and A.[PostDate] >= '${now}' and A.[PostDate] <= '${now}'
                    ) X
        WHERE T0.[UserSign] in (19,22,21) and T0.[Warehouse] = 'WHWIPMF1' and T0.[Status] not in ('C') and T0.[PostDate] >= '${now}' and T0.[PostDate] <= '${now}' and Y.U_MIS_CodeGroup = 'LINE1'

        Group by
        T0.[U_MIS_NoMesin],
        Y.U_MIS_CodeGroup ,
        T0.[DocNum] ,
        T0.[PostDate] ,
        T0.[ItemCode],
        T0.[PlannedQty],
        T0.[CmpltQty] ,
        T0.[Warehouse],
        T0.[U_MIS_NextProc] ,
        T0.[Status] ,
        T0.[UserSign]
        Order by Y.U_MIS_CodeGroup asc`;

        await sql.connect(config);
        let result = await sql.query(query);

        return result.recordsets;
    } catch (error) {
        console.error();
        return error;
    }
}
async function getLineDua() {
    try {
        const query = `SELECT
        T0.[U_MIS_NoMesin] as 'mcn',
        Y.U_MIS_CodeGroup 'groupMsn',
        T0.[ItemCode] as 'itemCode',
        T0.[PlannedQty] as 'planQty',
        T0.[CmpltQty] as 'receiveQty',
        T0.[CmpltQty]/T0.[PlannedQty] * 100 as 'percen',
        T0.[Warehouse] as 'wh',
        T0.[U_MIS_NextProc] as 'next'
        FROM OWOR T0
        LEFT JOIN WOR1 T1 ON T0.[DocEntry] = T1.[DocEntry]
        LEFT JOIN [@MASTERMESIN] Y on T0.U_MIS_NoMesin = Y.Code
        cross JOIN (Select SUM(A.CmpltQty) CmpltQty , sum(A.PlannedQty) PlannedQty
                    from OWOR A
                    LEFT JOIN [@MASTERMESIN] Y on A.U_MIS_NoMesin = Y.Code
                    where A.[UserSign] =19 and A.[Warehouse] = 'WHWIPMF1' and A.[Status] not in ('C') and A.[PostDate] >= '${now}' and A.[PostDate] <= '${now}'
                    ) X
        WHERE T0.[UserSign] in (19,22,21) and T0.[Warehouse] = 'WHWIPMF1' and T0.[Status] not in ('C') and T0.[PostDate] >= '${now}' and T0.[PostDate] <= '${now}' and Y.U_MIS_CodeGroup = 'LINE2'

        Group by
        T0.[U_MIS_NoMesin],
        Y.U_MIS_CodeGroup ,
        T0.[DocNum] ,
        T0.[PostDate] ,
        T0.[ItemCode],
        T0.[PlannedQty],
        T0.[CmpltQty] ,
        T0.[Warehouse],
        T0.[U_MIS_NextProc] ,
        T0.[Status] ,
        T0.[UserSign]
        Order by Y.U_MIS_CodeGroup asc`;

        await sql.connect(config);
        let result = await sql.query(query);

        return result.recordsets;
    } catch (error) {
        console.error();
        return error;
    }
}

async function getLineTiga() {
    try {
        const query = `SELECT
        T0.[U_MIS_NoMesin] as 'mcn',
        Y.U_MIS_CodeGroup 'groupMsn',
        T0.[ItemCode] as 'itemCode',
        T0.[PlannedQty] as 'planQty',
        T0.[CmpltQty] as 'receiveQty',
        T0.[CmpltQty]/T0.[PlannedQty] * 100 as 'percen',
        T0.[Warehouse] as 'wh',
        T0.[U_MIS_NextProc] as 'next'
        FROM OWOR T0
        LEFT JOIN WOR1 T1 ON T0.[DocEntry] = T1.[DocEntry]
        LEFT JOIN [@MASTERMESIN] Y on T0.U_MIS_NoMesin = Y.Code
        cross JOIN (Select SUM(A.CmpltQty) CmpltQty , sum(A.PlannedQty) PlannedQty
                    from OWOR A
                    LEFT JOIN [@MASTERMESIN] Y on A.U_MIS_NoMesin = Y.Code
                    where A.[UserSign] =19 and A.[Warehouse] = 'WHWIPMF1' and A.[Status] not in ('C') and A.[PostDate] >= '${now}' and A.[PostDate] <= '${now}'
                    ) X
        WHERE T0.[UserSign] in (19,22,21) and T0.[Warehouse] = 'WHWIPMF1' and T0.[Status] not in ('C') and T0.[PostDate] >= '${now}' and T0.[PostDate] <= '${now}' and Y.U_MIS_CodeGroup = 'LINE3'

        Group by
        T0.[U_MIS_NoMesin],
        Y.U_MIS_CodeGroup ,
        T0.[DocNum] ,
        T0.[PostDate] ,
        T0.[ItemCode],
        T0.[PlannedQty],
        T0.[CmpltQty] ,
        T0.[Warehouse],
        T0.[U_MIS_NextProc] ,
        T0.[Status] ,
        T0.[UserSign]
        Order by Y.U_MIS_CodeGroup asc`;

        await sql.connect(config);
        let result = await sql.query(query);

        return result.recordsets;
    } catch (error) {
        console.error();
        return error;
    }
}

module.exports = {
    getDataCam,
    getDataCncSatu,
    getDataCncDua,
    getDataCncTiga,
    getAllLine,
    getCamLine,
    getLineSatu,
    getLineDua,
    getLineTiga
};
