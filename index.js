// Your code here
let employeeInfo = [firstName, familyName, title, payRate]

function createEmployeeRecord(employeeInfo){
    let employeeRecord = {
        firstName: employeeInfo[0],
        familyName:employeeInfo[1],
        title: employeeInfo[2],
        payPerHour: employeeInfo[3],
        timeInEvents:[],
        timeOutEvents:[]    
    }
    return employeeRecord
}

function createEmployeeRecords (nestedArrays) {
    let recordArray = []
    nestedArrays.forEach((array) => {
        recordArray.push(createEmployeeRecord(array))
    })
    // recordArray.push(employeeRecord)
    return recordArray
}

function createTimeInEvent (employeeRecord, dateStamp){

    let dateStampArray = dateStamp.split(' ')
    let date = dateStampArray[0]
    let hours = dateStampArray[1]
    let timeInEventsArray = employeeRecord.timeInEvents
    // employeeRecord.type = 'TimeIn'
    // employeeRecord.hour = hours
    // employeeRecord.date = date

    let timeInObject = {
        type: 'TimeIn',
        hour: parseInt(hours),
        date: date
    }
   
    employeeRecord.timeInEvents.push(timeInObject)

    return employeeRecord
}


function createTimeOutEvent (employeeRecord, dateStamp){

    let dateStampArray = dateStamp.split(' ')
    let date = dateStampArray[0]
    let hours = dateStampArray[1]
    let timeOutEventsArray = employeeRecord.timeOutEvents
    // employeeRecord.type = 'TimeIn'
    // employeeRecord.hour = hours
    // employeeRecord.date = date

    let timeOutObject = {
        type: "TimeOut",
        hour: parseInt(hours, 10),
        date: date
    }
   
    timeOutEventsArray.push(timeOutObject)

    return employeeRecord
}

function hoursWorkedOnDate (employeeRecord, date){
    let timeInArray = employeeRecord.timeInEvents
    console.log(timeInArray)
    let timeOutArray = employeeRecord.timeOutEvents
    let timeInHour = 0
    let timeOutHour = 0
    
    timeInArray.forEach(day =>{
      if(day.date === date){
        timeInHour += day.hour
      }
      //return timeInHour
      })
  
    timeOutArray.forEach(day=>{
      if(day.date === date){
        timeOutHour+= day.hour
      }
    })
    // console.log(timeOutHour)
    // console.log(timeInHour)
    let hoursWorked = (timeOutHour-timeInHour)/100
    console.log(hoursWorked)
    return hoursWorked
}

function wagesEarnedOnDate(employeeRecord, date){
    let hoursWorked = hoursWorkedOnDate(employeeRecord, date)
    let perHour = employeeRecord.payPerHour
    let payOwed = hoursWorked * perHour
    return payOwed
}

function allWagesFor (employeeRecord){
    let timeInArray = employeeRecord.timeInEvents
    let totalWage = 0
      timeInArray.forEach(day => {
      let dailyWage = wagesEarnedOnDate(employeeRecord, day.date)
        totalWage += dailyWage
      })
    return totalWage
  }

function calculatePayroll (employeeArray){
    const hmm = 0
    let wagesArray = employeeArray.map(allWagesFor)
    let bigTotal = wagesArray.reduce((employeeOne, employeeTwo) => employeeOne + employeeTwo, hmm)
    return bigTotal
}

