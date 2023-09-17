const personsDetails = [
    {
        name: "Chibund",
        status: "Developer",
        adress: {street: "Aku Road", location: {
            zipCode: 41123,
            lga: "Nusuka",
            timeZone: "+1"
            }
        },
        education: {
            level: "Bachelor",
            grade: "second class",
            school: {
                name: "University of Nigeria",
                faculty: "Physical Science",
                dept: "Computer Science"
            }
        } 
     },
     {
        name: "Gift",
        status: "Business",
        adress: {street: "Aku Road",},
        education: {
            level: "Bachelor",
            grade: "second class",
            school: {
                name: "University of Nigeria",               
                dept: "Zoological Science",
            }
        } 
     },
     {
        name: "Akuoma",
        status: "Growing",
        adress: {street: "Papa house",},
        education: {
            level: "learning to talk",            
            school: {
                name: "Mama room",               
            }
        } 
     },
] 
let getter = personsDetails.forEach(detail => {    
    //console.log(detail.adress && detail.adress.location && detail.adress.location.lga || "LGA not available")
    console.log(detail?.adress?.location?.lga || "LGA not Available")
})
//console.log(getter)