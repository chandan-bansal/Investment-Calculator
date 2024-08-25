import { useState } from "react"
import { Input } from "./components/Input"
import ResultTable from "./components/ResultTable"
import { calculateInvestmentResults } from "./util/investment"
function App() {
  const [investmentObject, setInvestmentObject] = useState({initialInvestment:0, annualInvestment:0, expectedReturn:0, duration:0});
  const [tableData, setTableData] = useState([]);
  const onInitialInvestmentValueChanged = (e)=>{
    setInvestmentObject((prevObject)=>{
      const updatedObject = {...prevObject, initialInvestment:parseInt(e.target.value)};
      calculateValue(updatedObject);
      return updatedObject;
    })
  }
  const onAnnualInvestmentValueChanged = (e)=>{
    setInvestmentObject((prevObject)=>{
      const updatedObject = {...prevObject, annualInvestment:parseInt(e.target.value)};
      calculateValue(updatedObject);
      return updatedObject;
    })
  }
  const onReturnValueChanged = (e)=>{
    setInvestmentObject((prevObject)=>{
      const updatedObject = {...prevObject, expectedReturn:parseInt(e.target.value)};
      calculateValue(updatedObject);
      return updatedObject;
    })
  }
  const onDurationValueChanged = (e)=>{
    setInvestmentObject((prevObject)=>{
      const updatedObject = {...prevObject, duration:parseInt(e.target.value)};
      calculateValue(updatedObject);
      return updatedObject;
    })

  }

  const calculateValue=(obj)=>{
    const data = calculateInvestmentResults(obj);
    console.log("Data", data);
    setTableData(data);
  }
  return (
    <div className="center">
      <div id="user-input">
        <div className="input-group">
          <Input inputId="initInvest" inputType="number" inputTag="Initial Investment" value={investmentObject.initialInvestment} onValueChanged={onInitialInvestmentValueChanged}/>
          <Input inputId="annInvestment" inputType="number" inputTag="Annual Investment" value={investmentObject.annualInvestment} onValueChanged={onAnnualInvestmentValueChanged}/>
        </div>
        <div className="input-group">
          <Input inputId="expReturn" inputType="number" inputTag="Expected Return" value={investmentObject.expectedReturn} onValueChanged={onReturnValueChanged}/>
          <Input inputId="duration" inputType="number" inputTag="Duration" value={investmentObject.duration} onValueChanged={onDurationValueChanged}/>
        </div>
      </div>

      <div>
        <ResultTable result={tableData}/>
      </div>

    </div>
    
  )
}

export default App
