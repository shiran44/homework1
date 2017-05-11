var data   = require('./data/companiesData.json');
var names1=[],
    names2=[];
exports.array=names1,names2;

module.exports={

    allCompanies(){
        for(let i in data.companies){
            var company = data.companies[i];
            console.log(company.name);
            names1.push(company.name);
        }
        return ({"names of all companies":names1});
    },

    getCompByProfile(Profile_id){
    let foundComp = false;
    for(let i in data.companies){
        var company = data.companies[i];
        if(company.Profile == Profile_id){
            console.log(company.name);
            foundCommp = true;
            return ({"profile of":company});
        }
    }
    if (!foundComp) return ({"error":"no company for this profile"});
    },

    getCompByCityAndDev(city,devices){
    let found = false;
        for(let i in data.companies){
            var company = data.companies[i];
            if(company.Quantity_of_devices >= devices){
                console.log(company.Quantity_of_devices);
                for (let j in company.Branches){
                    var Branch= company.Branches[j];
                    if(Branch.city == city){
                        console.log(Branch.city);
                        found = true;
                        names2.push(company.name);
                    }
                }
            }

        }
    return ({"The company/ies with the amount of devices and this city":names2});
    if (!found) return ({"error":"no company for this data"});
    } 
};
