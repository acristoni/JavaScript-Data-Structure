const string = '12:05:45PM'

function timeConversion(s) {
    const postOrAnteMeridian = s[8]
    const hour = parseInt(s.substring(0,2))
    let convertToMilitaryStandart = ''

    if ( postOrAnteMeridian === 'P' && hour != 12) {
        const convertion = s.replace('PM', '')
        const convertedHour = (hour + 12).toString()
        convertToMilitaryStandart = convertedHour + convertion.substring(2,convertion.length)
    }

    if ( postOrAnteMeridian === 'P' && hour === 12) {
        convertToMilitaryStandart = s.replace('PM', '')
    }
    
    if ( postOrAnteMeridian === 'A') {
        convertToMilitaryStandart = s.replace('AM', '')
        
        if (hour === 12) {
            const convertedHour = '00'
            convertToMilitaryStandart = convertedHour + convertToMilitaryStandart.substring(2,convertToMilitaryStandart.length)
        }
    }

    return convertToMilitaryStandart
}

console.log(timeConversion(string))