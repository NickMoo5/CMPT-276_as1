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

const upperBound = "upperBound"
const lowerBound = "lowerBound"

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

const maxBoundInc = 200.01
const maxBound = 200.00;
const minBound = 0.00;
const minBoundInc = -0.01

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

var numRangeErrorMsg = "Numbers " + minBound + " to " + maxBound
var newGradeErrorMsg = "Numbers " + minBound + " to " + boundsModel[maxId]
const boundsErrorMsg = "Invalid Bound"

var boundsLimits = {
    [maxId]:    {[upperBound]: maxBoundInc,             [lowerBound]: boundsModel[aPlusId]},
    [aPlusId]:  {[upperBound]: boundsModel[maxId],      [lowerBound]: boundsModel[aId]},
    [aId]:      {[upperBound]: boundsModel[aPlusId],    [lowerBound]: boundsModel[aMinusId]},
    [aMinusId]: {[upperBound]: boundsModel[aId],        [lowerBound]: boundsModel[bPlusId]},
    [bPlusId]:  {[upperBound]: boundsModel[aMinusId],   [lowerBound]: boundsModel[bId]},
    [bId]:      {[upperBound]: boundsModel[bPlusId],    [lowerBound]: boundsModel[bMinusId]},
    [bMinusId]: {[upperBound]: boundsModel[bId],        [lowerBound]: boundsModel[cPlusId]},
    [cPlusId]:  {[upperBound]: boundsModel[bMinusId],   [lowerBound]: boundsModel[cId]},
    [cId]:      {[upperBound]: boundsModel[cPlusId],    [lowerBound]: boundsModel[cMinusId]},
    [cMinusId]: {[upperBound]: boundsModel[cId],        [lowerBound]: boundsModel[dId]},
    [dId]:      {[upperBound]: boundsModel[cMinusId],   [lowerBound]: boundsModel[fId]},
    [fId]:      {[upperBound]: boundsModel[dId],        [lowerBound]: minBoundInc},
}

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

var boundsValidated = true
var newGradeValidated = true
var histPercentIncrement = 20

function updateBoundsLimits() {
    boundsLimits = {
        [maxId]:    {[upperBound]: maxBoundInc,             [lowerBound]: boundsModel[aPlusId]},
        [aPlusId]:  {[upperBound]: boundsModel[maxId],      [lowerBound]: boundsModel[aId]},
        [aId]:      {[upperBound]: boundsModel[aPlusId],    [lowerBound]: boundsModel[aMinusId]},
        [aMinusId]: {[upperBound]: boundsModel[aId],        [lowerBound]: boundsModel[bPlusId]},
        [bPlusId]:  {[upperBound]: boundsModel[aMinusId],   [lowerBound]: boundsModel[bId]},
        [bId]:      {[upperBound]: boundsModel[bPlusId],    [lowerBound]: boundsModel[bMinusId]},
        [bMinusId]: {[upperBound]: boundsModel[bId],        [lowerBound]: boundsModel[cPlusId]},
        [cPlusId]:  {[upperBound]: boundsModel[bMinusId],   [lowerBound]: boundsModel[cId]},
        [cId]:      {[upperBound]: boundsModel[cPlusId],    [lowerBound]: boundsModel[cMinusId]},
        [cMinusId]: {[upperBound]: boundsModel[cId],        [lowerBound]: boundsModel[dId]},
        [dId]:      {[upperBound]: boundsModel[cMinusId],   [lowerBound]: boundsModel[fId]},
        [fId]:      {[upperBound]: boundsModel[dId],        [lowerBound]: minBoundInc},
    }
}

function clearHistModel() {
    for (const key in histModel) {
        histModel[key] = 0
    }
}

function updateHistGraphics() {
    var max = getMaxHist()
    while (max*histPercentIncrement > 100) {
        histPercentIncrement--
    }

    histograms.forEach(function(histograms) {
        var id = histograms.id
        var numPercent = histModel[histNameToId[id]]*histPercentIncrement
        if (numPercent == 0) {
            histograms.style.display = "none"
        } else {
            histograms.style.display = "block"
            var widthStr = numPercent + "%"
            histograms.style.width = widthStr
            histograms.textContent = histModel[histNameToId[id]]
        }
    })
}

function updateHistogram() {
    clearHistModel()
    if (gradesModel && boundsValidated == true) {
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

function getMaxHist() {
    var max = 0
    max = histModel[aPlusId]
    for (const key in histModel) {
        if (histModel[key] > max) {
            max = histModel[key]
        }
    }
    return max
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

function validateNewGrade(input) {
    var validated = true
    var value = input.value

    if (isNaN(value) || value == '' || value > parseFloat(boundsModel[maxId]) || value < parseFloat(boundsModel[fId])) {
        validated = false
        input.style.borderColor = "red"
        activateErrorMsg(errorToId[input.id], newGradeErrorMsg)
    } else {
        input.style.borderColor = ""
        disableErrorMsg(errorToId[input.id])
    }

    newGradeValidated = validated
}

function validateInputRange(input) {
    var validated = true
    var value = input.value
    updateBoundsModel()
    var upper = boundsLimits[input.id][upperBound]
    var lower = boundsLimits[input.id][lowerBound]
/*
    if (isNaN(value) || value == '' || value > maxBound || value < minBound) {
        validated = false
        input.style.borderColor = "red"
        activateErrorMsg(errorToId[input.id], numRangeErrorMsg)
        boundsValidated = validated
        return
    }
*/
    if (validateBoundss()){
        updateBoundsModel()
        var maxB = boundsModel[maxId]
        if (isNaN(maxB)) {
            maxB = "Max Bound"
        }
        newGradeErrorMsg = "Numbers " + minBound + " to " + maxB
        setNewGradeDefaults()
        if (newGradeTextBox.value != "") {
            disableErrorMsg(errorToId[input.id])
            validateNewGrade(newGradeTextBox)
        }
    } else {
        validated = false
    }

    boundsValidated = validated
    updateHistogram()
}

function validateBounds() {
    var validated = true
    inputBoundElements.forEach(function(inputBoundElements) {
        let upper = boundsLimits[inputBoundElements.id][upperBound]
        let lower = boundsLimits[inputBoundElements.id][lowerBound]
        let value = inputBoundElements.value
        if (parseFloat(value) >= upper || parseFloat(value) <= lower) {
            validated = false
            inputBoundElements.style.borderColor = "red"
            activateErrorMsg(errorToId[inputBoundElements.id], boundsErrorMsg)
        } else {
            disableErrorMsg(errorToId[inputBoundElements.id])
            inputBoundElements.style.borderColor = ""
        }
    })
    return validated
}

function validateBoundss() {
    var validated = true
    inputBoundElements.forEach(function(inputBoundElements) {
        let upper = boundsLimits[inputBoundElements.id][upperBound]
        let lower = boundsLimits[inputBoundElements.id][lowerBound]
        let value = inputBoundElements.value

        if (isNaN(value) || value == '' || value > maxBound || value < minBound) {
            validated = false
            inputBoundElements.style.borderColor = "red"
            activateErrorMsg(errorToId[inputBoundElements.id], numRangeErrorMsg)
            boundsValidated = validated
        } else if (parseFloat(value) >= upper || parseFloat(value) <= lower) {
            validated = false
            inputBoundElements.style.borderColor = "red"
            activateErrorMsg(errorToId[inputBoundElements.id], boundsErrorMsg)
        } else {
            disableErrorMsg(errorToId[inputBoundElements.id])
            inputBoundElements.style.borderColor = ""
        }
    })
    return validated
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
    updateBoundsLimits()
}

function submitEvent(input) {
    validateNewGrade(newGradeTextBox)
    if (newGradeValidated == true && boundsValidated == true) {
        gradesModel.push(parseFloat(input.value))
        input.value = null
        updateHistogram()
    } else {
        activateErrorMsg(errorToId[input.id], "Correct bounds before adding a new grade")
    }
}

function setNewGradeDefaults() {
    newGradeTextBox.placeholder = "" + minBound + " - " + boundsModel[maxId]
}

setInputBoxDefaults()
updateHistogram()
setNewGradeDefaults()

inputBoundElements.forEach(function(inputBoundElements) {
    inputBoundElements.addEventListener("input", validateInputRange.bind(null, inputBoundElements));
    inputBoundElements.addEventListener("blur", function(event) {
        var val = event.target.value        
        if (!isNaN(val) && val != '') {
            event.target.value = parseFloat(val).toFixed(2)
        }
    })
});

newGradeTextBox.addEventListener("input", validateNewGrade.bind(null, newGradeTextBox));
newGradeTextBox.addEventListener("keydown", function(event) {
    if (event.code == 'Enter') {
        submitEvent(newGradeTextBox)
    }
})
newGradeTextBox.addEventListener("blur", function(event) {
    console.log("Moo")
    if (event.target.value == "") {
        console.log("Moo")
        event.target.style.borderColor = ""
        disableErrorMsg(errorToId[event.target.id])
    }
})

submitButton.addEventListener("click", submitEvent.bind(null, newGradeTextBox))


