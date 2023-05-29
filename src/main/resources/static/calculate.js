const boundsCont = document.getElementById("boundsCont")
const submitButton = document.getElementById("submitButton")
const newGradeTextBox = document.getElementById("newGradeInput")

const histograms = document.getElementById("histogram").querySelectorAll("p1")
const inputBoundElements = boundsCont.querySelectorAll("input"); 

const maxId = "max";
const aPlusId = "aPlus";
const aId = "a";
const aMinusId = "aMinus";
const bPlusId = "bPlus";
const bId = "b";
const bMinusId = "bMinus";
const cPlusId = "cPlus";
const cId = "c";
const cMinusId = "cMinus";
const dId = "d";
const fId = "f";

const maxDefault = "100.00";
const aPlusDefault = "95.00";
const aDefault = "90.00";
const aMinusDefault = "85.00";
const bPlusDefault = "80.00";
const bDefault = "75.00";
const bMinusDefault = "70.00";
const cPlusDefault = "65.00";
const cDefault = "60.00";
const cMinusDefault = "55.00";
const dDefault = "50.00";
const fDefault = "0.00";

const aPlusHistId = "aPlusHist"
const aHistId = "aHist"
const aMinusHistId = "aMinusHist"
const bPlusHistId = "bPlusHist"
const bHistId = "bHist"
const bMinusHistId = "bMinusHist"
const cPlusHistId = "cPlusHist"
const cHistId = "cHist"
const cMinusHistId = "cMinusHist"
const dHistId = "dHist"
const fHistId = "fHist"

const maxErrorId = "maxError"
const aPlusErrorId = "aPlusError"
const aErrorId = "aError"
const aMinusErrorId = "aMinusError"
const bPlusErrorId = "bPlusError"
const bErrorId = "bError"
const bMinusErrorId = "bMinusError"
const cPlusErrorId = "cPlusError"
const cErrorId = "cError"
const cMinusErrorId = "cMinusError"
const dErrorId = "dError"
const fErrorId = "fError"
const newGradeErrorId = "newGradeError"

const newGradeId = "newGradeInput"

const errorToId = {
    [maxId]: maxErrorId,
    [aPlusId]: aPlusErrorId,
    [aId]: aErrorId,
    [aMinusId]: aMinusErrorId,
    [bPlusId]: bPlusErrorId,
    [bId]: bErrorId,
    [bMinusId]: bMinusErrorId,
    [cPlusId]: cPlusErrorId,
    [cId]: cErrorId,
    [cMinusId]: cMinusErrorId,
    [dId]: dErrorId,
    [fId]: fErrorId,
    [newGradeId]: newGradeErrorId,
}

const maxBound = 200.00;
const minBound = 0.00;

const boundsModel = {
    [maxId]: maxDefault,
    [aPlusId]: aPlusDefault,
    [aId]: aDefault,
    [aMinusId]: aMinusDefault,
    [bPlusId]: bPlusDefault,
    [bId]: bDefault,
    [bMinusId]: bMinusDefault,
    [cPlusId]: cPlusDefault,
    [cId]: cDefault,
    [cMinusId]: cMinusDefault,
    [dId]: dDefault,
    [fId]: fDefault,
}

var numRangeErrorMsg = "Numbers " + minBound + " to " + maxBound

var gradesModel =  [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
    49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01]

var histModel = {
    [aPlusId]: 0,
    [aId]: 0,
    [aMinusId]: 0,
    [bPlusId]: 0,
    [bId]: 0,
    [bMinusId]: 0,
    [cPlusId]: 0,
    [cId]: 0,
    [cMinusId]: 0,
    [dId]: 0,
    [fId]: 0,
}

const histNameToId = {
    [aPlusHistId]: aPlusId,
    [aHistId]: aId,
    [aMinusHistId]: aMinusId,
    [bPlusHistId]: bPlusId,
    [bHistId]: bId,
    [bMinusHistId]: bMinusId,
    [cPlusHistId]: cPlusId,
    [cHistId]: cId,
    [cMinusHistId]: cMinusId,
    [dHistId]: dId,
    [fHistId]: fId,
}

var allInputsValidated = true

function clearHistModel() {
    for (const key in histModel) {
        histModel[key] = 0
    }
}

function updateHistGraphics() {
    var counter = 0
    histograms.forEach(function(histograms) {
        var id = histograms.id
        var numZeroes = histModel[histNameToId[id]]
        var histString = ""

        for (let i = 0; i < numZeroes; i++) {
            histString += "O"
            counter++
        }
        histograms.textContent = histString
    })
    console.log("Counter: " + counter)
}

function updateHistogram() {
    clearHistModel()
    console.log(gradesModel)
    console.log(gradesModel.length)
    if (gradesModel) {
        gradesModel.forEach(function(sortedGrades) {
            if (sortedGrades >= boundsModel[aPlusId]) {
                histModel[aPlusId] += 1
            } else if (sortedGrades >= boundsModel[aId]) {
                histModel[aId] += 1
            } else if (sortedGrades >= boundsModel[aMinusId]) {
                histModel[aMinusId] += 1
            } else if (sortedGrades >= boundsModel[bPlusId]) {
                histModel[bPlusId] += 1
            } else if (sortedGrades >= boundsModel[bId]) {
                histModel[bId] += 1
            } else if (sortedGrades >= boundsModel[bMinusId]) {
                histModel[bMinusId] += 1
            } else if (sortedGrades >= boundsModel[cPlusId]) {
                histModel[cPlusId] += 1
            } else if (sortedGrades >= boundsModel[cId]) {
                histModel[cId] += 1
            } else if (sortedGrades >= boundsModel[cMinusId]) {
                histModel[cMinusId] += 1
            } else if (sortedGrades >= boundsModel[dId]) {
                histModel[dId] += 1
            } else {
                histModel[fId] += 1
            } 
             
        })
    }

    updateHistGraphics()
}

function verifyBoundsValues() {
    var retVal = true
    updateBoundsModel()

    inputBoundElements.forEach(function(inputBoundElements) {
        inputBoundElements.style.borderColor = "initial"
    })

    if (boundsModel[maxId] <= boundsModel[aPlusId]) {
        activateErrorMsg(errorToId[maxId], "Must be greater than A+ bound")
        retVal = false
    } else {
        disableErrorMsg(errorToId[maxId])
    }
    if (boundsModel[aPlusId] >= boundsModel[maxId] || boundsModel[aPlusId] <= boundsModel[aId]) {
        activateErrorMsg(errorToId[aPlusId], "Must be between Max and A bounds")
        retVal = false
    } else {
        disableErrorMsg(errorToId[aPlusId])
    } 
    if (boundsModel[aId] >= boundsModel[aPlusId] || boundsModel[aId] <= boundsModel[aMinusId]) {
        activateErrorMsg(errorToId[aId], "Must be between A+ and A- bounds")
        retVal = false
    } else {
        disableErrorMsg(errorToId[aId])
    } 
    if (boundsModel[aMinusId] >= boundsModel[aId] || boundsModel[aMinusId] <= boundsModel[bPlusId]) {
        activateErrorMsg(errorToId[aMinusId], "Must be between A and B+ bounds")
        retVal = false
    } else {
        disableErrorMsg(errorToId[aMinusId])
    } 
    if (boundsModel[bPlusId] >= boundsModel[aMinusId] || boundsModel[bPlusId] <= boundsModel[bId]) {
        activateErrorMsg(errorToId[bPlusId], "Must be between A- and B bounds")
        retVal = false
    } else {
        disableErrorMsg(errorToId[bPlusId])
    } 
    if (boundsModel[bId] >= boundsModel[bPlusId] || boundsModel[bId] <= boundsModel[bMinusId]) {
        activateErrorMsg(errorToId[bId], "Must be between B+ and B- bounds")
        retVal = false
    } else {
        disableErrorMsg(errorToId[bId])
    } 
    if (boundsModel[bMinusId] >= boundsModel[bId] || boundsModel[bMinusId] <= boundsModel[cPlusId]) {
        activateErrorMsg(errorToId[bMinusId], "Must be between B and C+ bounds")
        retVal = false
    } else {
        disableErrorMsg(errorToId[bMinusId])
    } 
    if (boundsModel[cPlusId] >= boundsModel[bMinusId] || boundsModel[cPlusId] <= boundsModel[cId]) {
        activateErrorMsg(errorToId[cPlusId], "Must be between B- and C bounds")
        retVal = false
    } else {
        disableErrorMsg(errorToId[cPlusId])
    } 
    if (boundsModel[cId] >= boundsModel[cPlusId] || boundsModel[cId] <= boundsModel[cMinusId]) {
        activateErrorMsg(errorToId[cId], "Must be between C+ and C- bounds")
        retVal = false
    } else {
        disableErrorMsg(errorToId[cId])
    } 
    if (boundsModel[cMinusId] >= boundsModel[cId] || boundsModel[cMinusId] <= boundsModel[dId]) {
        activateErrorMsg(errorToId[cMinusId], "Must be between C and D bounds")
        retVal = false
    } else {
        disableErrorMsg(errorToId[cMinusId])
    } 
    if (boundsModel[dId] >= boundsModel[cMinusId] || boundsModel[dId] <= boundsModel[fId]) {
        activateErrorMsg(errorToId[dId], "Must be between C- and F bounds")
        retVal = false
    } else {
        disableErrorMsg(errorToId[dId])
    } 
    if (boundsModel[fId] >= boundsModel[dId]) {
        activateErrorMsg(errorToId[fId], "Must be less than D bound")
        retVal = false
    } else {
        disableErrorMsg(errorToId[fId])
    } 
    return retVal
}

function activateErrorMsg(id, msg) {
    var element = document.getElementById(id)
    element.innerHTML = msg
    element.style.display = "block"
}

function disableErrorMsg(id) {
    var element = document.getElementById(id)
    element.style.display = "none"
}

function validateInputRange(input) {
    var validated = true
    var value = input.value
    input.style.borderColor = "initial";

    if (isNaN(value) || value == '' || value > maxBound || value < minBound) {
        validated = false
        input.style.borderColor = "red"
        activateErrorMsg(errorToId[input.id], numRangeErrorMsg)
    } else if (!verifyBoundsValues()) {
        validated = false
        input.style.borderColor = "red"
    } else {
        input.style.borderColor = "initial";
        disableErrorMsg(errorToId[input.id])
        updateBoundsModel()
        updateHistogram()
        setNewGradeDefaults()
    }
    allInputsValidated = validated
}

function setInputBoxDefaults() {
    inputBoundElements.forEach(function(inputBoundElements) {
        var id = inputBoundElements.id;
        inputBoundElements.value = boundsModel[id];
        inputBoundElements.placeholder = "" + minBound + " - " + maxBound;
        inputBoundElements.autocomplete = "off"
    })
}

function updateBoundsModel() {
    inputBoundElements.forEach(function(inputBoundElements) {
        var id = inputBoundElements.id;
        var value = inputBoundElements.value;
        boundsModel[id] = parseFloat(value);
    })
    console.log(boundsModel)
}

function submitEvent(input) {
    validateInputRange(newGradeTextBox)
    if (allInputsValidated == true) {
        gradesModel.push(parseInt(input.value))
        input.value = null
        updateHistogram()
    }

}

function clearGradesModel(input) {
    gradesModel = []
}

function setNewGradeDefaults() {
    newGradeTextBox.placeholder = "" + minBound + " - " + boundsModel[maxId]
}

inputBoundElements.forEach(function(inputBoundElements) {
    inputBoundElements.addEventListener("input", validateInputRange.bind(null, inputBoundElements));
    inputBoundElements.addEventListener("blur", function(event) {
        var val = event.target.value        
        if (!isNaN(val) && val != '') {
            event.target.value = parseFloat(val).toFixed(2)
        }
    })
});

newGradeTextBox.addEventListener("input", validateInputRange.bind(null, newGradeTextBox));
newGradeTextBox.addEventListener("keydown", function(event) {
    if (event.code == 'Enter') {
        submitEvent(newGradeTextBox)
    }
})

submitButton.addEventListener("click", submitEvent.bind(null, newGradeTextBox))

setInputBoxDefaults()
updateHistogram()
