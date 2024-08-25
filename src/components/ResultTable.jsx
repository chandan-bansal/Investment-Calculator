import { formatter } from "../util/investment";

export default function ResultTable({result}){
    let initialInvest = 0
    if(result.length > 0){
        initialInvest = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
    }
    console.log("Result",result);
    return(
        <table id="result">
            {result.length>0 && (<thead>
                <tr>
                <td>Year</td>
                <td>Investment Value</td>
                <td>Interest(Year)</td>
                <td>Total Interest</td>
                <td>Invested Capital</td>
                </tr>
            </thead>)}
            <tbody>
                {result && result.map((resultItem) =>{
                    const totalInterest = resultItem.valueEndOfYear - resultItem.annualInvestment * resultItem.year - initialInvest;
                    const totalInvested = resultItem.valueEndOfYear - totalInterest;
                    return(
                    <tr key = {resultItem.year}>
                        <td>{resultItem.year}</td>
                        <td>{formatter.format(resultItem.valueEndOfYear)}</td>
                        <td>{formatter.format(resultItem.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalInvested)}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}