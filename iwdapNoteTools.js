const TET12 = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

function transposeNoteHalfStepUp(note) {


    if (note==='B'){
        return ('C');
    }else {
        let indexOfNote = TET12.indexOf(note);
        let indexOfNextNote = indexOfNote + 1;
        let newNote = TET12 [indexOfNextNote];
        return (newNote);
    }
    }


function transposeNoteHalfStepDown(note){
    if (note==='C'){
        return ('B');
    }else {
        let indexOfNote = TET12.indexOf(note);
        let indexOfNextNote = indexOfNote - 1;
        let newNote = TET12 [indexOfNextNote];
        return (newNote);
    }
    }

function transposeNoteFullStepUp(note){

    if (note==='B'){
        return ('C#');
    } else if  (note==='A#'){
        return ('C');
    } else
    {
        let indexOfNote = TET12.indexOf(note);
        let indexOfNextNote = indexOfNote + 2;
        let newNote = TET12 [indexOfNextNote];
        return (newNote);
    }
    }

function transposeNoteFullStepDown(note){
    if (note==='C'){
        return ('A#');
    } else if  (note==='C#'){
        return ('B');
    } else
    {
        let indexOfNote = TET12.indexOf(note);
        let indexOfNextNote = indexOfNote - 2;
        let newNote = TET12 [indexOfNextNote];
        return (newNote);
    }
    }


function majorScale(note){

    const newTET12 = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

    let indexFirstNote = newTET12.indexOf(note);
    let indexSecondNote = indexFirstNote +2;
    let indexThirdNote = indexSecondNote + 2;
    let indexFourthNote = indexThirdNote + 1;
    let indexFifthNote = indexFourthNote + 2;
    let indexSixthNote = indexFifthNote+ 2;
    let indexSeventhNote = indexSixthNote + 2;
    let indexEightNote = indexSeventhNote +1;

    let secondNote = newTET12 [indexSecondNote];
    let thirdNote = newTET12 [indexThirdNote];
    let fourthNote = newTET12 [indexFourthNote];
    let fifthNote = newTET12 [indexFifthNote];
    let sixthNote = newTET12 [indexSixthNote];
    let seventhNote = newTET12 [indexSeventhNote];
    let eightNote = newTET12 [indexEightNote];
    
    let majorScaleMelody = [note, secondNote, thirdNote, fourthNote, fifthNote, sixthNote, seventhNote, eightNote];
    return majorScaleMelody;

}

function minorScale(note){
    const newTET12 = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

    let indexFirstNote = newTET12.indexOf(note);
    let indexSecondNote = indexFirstNote +2;
    let indexThirdNote = indexSecondNote + 1;
    let indexFourthNote = indexThirdNote + 2;
    let indexFifthNote = indexFourthNote + 2;
    let indexSixthNote = indexFifthNote+ 1;
    let indexSeventhNote = indexSixthNote + 2;
    let indexEightNote = indexSeventhNote +2;

    let secondNote = newTET12 [indexSecondNote];
    let thirdNote = newTET12 [indexThirdNote];
    let fourthNote = newTET12 [indexFourthNote];
    let fifthNote = newTET12 [indexFifthNote];
    let sixthNote = newTET12 [indexSixthNote];
    let seventhNote = newTET12 [indexSeventhNote];
    let eightNote = newTET12 [indexEightNote];
    
    let minorScaleMelody = [note, secondNote, thirdNote, fourthNote, fifthNote, sixthNote, seventhNote, eightNote];
    return minorScaleMelody;
}

function majorTriad (note) {

// 1 run majorScale(note) which gives an array and I assign it to a new variable;

let notesNeeded = majorScale(note);

   // notesNeeded = [note, secondNote, thirdNote, fourthNote, fifthNote, sixthNote, seventhNote, eightNote];

// 2 i take only some values from the array, those with a particular index


let majorTriadMelody = [notesNeeded[0], notesNeeded [2], notesNeeded [4]];

return majorTriadMelody;

}

function minorTriad (note){

let notesNeededMinor = minorScale(note);

let minorTriadMelody = [notesNeededMinor[0], notesNeededMinor [2], notesNeededMinor [4]];

return minorTriadMelody;
}

let iwdapNoteTools = {

    transposeNoteHalfStepUp: function (note) {
     if (note==='B'){
        return ('C');
     } else {
        let indexOfNote = TET12.indexOf(note);
        let indexOfNextNote = indexOfNote + 1;
        let newNote = TET12 [indexOfNextNote];
        return (newNote);
     }
    },
   
    transposeNoteHalfStepDown: function (note) {
    if (note==='C'){
        return ('B');
    }else {
        let indexOfNote = TET12.indexOf(note);
        let indexOfNextNote = indexOfNote - 1;
        let newNote = TET12 [indexOfNextNote];
        return (newNote);
    }
    },

   transposeNoteFullStepUp: function (note){

    if (note==='B'){
        return ('C#');
    } else if  (note==='A#'){
        return ('C');
    } else
    {
        let indexOfNote = TET12.indexOf(note);
        let indexOfNextNote = indexOfNote + 2;
        let newNote = TET12 [indexOfNextNote];
        return (newNote);
    }
    },

    transposeNoteFullStepDown: function (note){
    if (note==='C'){
        return ('A#');
    } else if  (note==='C#'){
        return ('B');
    } else
    {
        let indexOfNote = TET12.indexOf(note);
        let indexOfNextNote = indexOfNote - 2;
        let newNote = TET12 [indexOfNextNote];
        return (newNote);
    }
    },

    majorScale: function (note){

        const newTET12 = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    
        let indexFirstNote = newTET12.indexOf(note);
        let indexSecondNote = indexFirstNote +2;
        let indexThirdNote = indexSecondNote + 2;
        let indexFourthNote = indexThirdNote + 1;
        let indexFifthNote = indexFourthNote + 2;
        let indexSixthNote = indexFifthNote+ 2;
        let indexSeventhNote = indexSixthNote + 2;
        let indexEightNote = indexSeventhNote +1;
    
        let secondNote = newTET12 [indexSecondNote];
        let thirdNote = newTET12 [indexThirdNote];
        let fourthNote = newTET12 [indexFourthNote];
        let fifthNote = newTET12 [indexFifthNote];
        let sixthNote = newTET12 [indexSixthNote];
        let seventhNote = newTET12 [indexSeventhNote];
        let eightNote = newTET12 [indexEightNote];
        
        let majorScaleMelody = [note, secondNote, thirdNote, fourthNote, fifthNote, sixthNote, seventhNote, eightNote];
        return majorScaleMelody;
    
    },

    minorScale: function (note){
        const newTET12 = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    
        let indexFirstNote = newTET12.indexOf(note);
        let indexSecondNote = indexFirstNote +2;
        let indexThirdNote = indexSecondNote + 1;
        let indexFourthNote = indexThirdNote + 2;
        let indexFifthNote = indexFourthNote + 2;
        let indexSixthNote = indexFifthNote+ 1;
        let indexSeventhNote = indexSixthNote + 2;
        let indexEightNote = indexSeventhNote +2;
    
        let secondNote = newTET12 [indexSecondNote];
        let thirdNote = newTET12 [indexThirdNote];
        let fourthNote = newTET12 [indexFourthNote];
        let fifthNote = newTET12 [indexFifthNote];
        let sixthNote = newTET12 [indexSixthNote];
        let seventhNote = newTET12 [indexSeventhNote];
        let eightNote = newTET12 [indexEightNote];
        
        let minorScaleMelody = [note, secondNote, thirdNote, fourthNote, fifthNote, sixthNote, seventhNote, eightNote];
        return minorScaleMelody;
    },

    majorTriad: function (note) {
        
        let notesNeeded = majorScale(note);
        
        let majorTriadMelody = [notesNeeded[0], notesNeeded [2], notesNeeded [4]];
        
        return majorTriadMelody;
        
    },
    
    minorTriad: function (note){

        let notesNeededMinor = minorScale(note);

        let minorTriadMelody = [notesNeededMinor[0], notesNeededMinor [2], notesNeededMinor [4]];

        return minorTriadMelody;
    }

};