// Employee Array
var employeeArray = [
    { name: "Alice Johnson", hourlyRate: 25, hoursWorked: 45 },
    { name: "Bob Smith", hourlyRate: 20, hoursWorked: 35 },
    { name: "Charlie Brown", hourlyRate: 30, hoursWorked: 50 },
    { name: "Diana Prince", hourlyRate: 28, hoursWorked: 40 },
    { name: "Edward Norton", hourlyRate: 22, hoursWorked: 42 }
];

//Function for Base Pay (Up to 40 hours)
function calculateBasePay(rate, hours) {
    if (hours > 40) {
        return rate * 40; // Only pay for the first 40
    } else {
        return rate * hours; // Pay for actual hours if under 40
    }
}

//Function for Overtime Pay (1.5x for hours above 40)
function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        var extraHours = hours - 40;
        var overtimeRate = rate * 1.5;
        var overtimeTotal = extraHours * overtimeRate;
        return overtimeTotal;
    } else {
        return 0; // No overtime if 40 hours or less
    }
}

//Function for 15% Tax Deduction
function calculateTaxes(grossPay) {
    var taxRate = 0.15;
    var taxAmount = grossPay * taxRate;
    return taxAmount;
}

//Individual testing in the console
console.log("Testing Individual Functions");
console.log("Base Pay Test (40hrs at $20):", calculateBasePay(20, 40)); 
console.log("Overtime Test (45hrs at $20):", calculateOvertimePay(20, 45));
console.log("Tax Test ($1000 gross):", calculateTaxes(1000));

//Function to Process Payroll for one employee
function processPayroll(employee) {
    // Using the functions created above
    var basePayValue = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    var overtimePayValue = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    
    var totalGrossPay = basePayValue + overtimePayValue;
    var totalTax = calculateTaxes(totalGrossPay);
    var totalNetPay = totalGrossPay - totalTax;

    // Return the full payroll object
    return {
        name: employee.name,
        basePay: basePayValue,
        overtimePay: overtimePayValue,
        grossPay: totalGrossPay,
        netPay: totalNetPay
    };
}

//Loop through employees and log the output
console.log("--- Employee Payroll Report ---");

for (var i = 0; i < employeeArray.length; i++) {
    var currentEmployee = employeeArray[i];
    var payrollResults = processPayroll(currentEmployee);
    
    // Logging the result object for each person
    console.log(payrollResults);
}