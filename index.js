const ShowInfo = (data) => {
    const worlds = data
        .split('\n')
        .map((e) => e.split(',').reduce((acc, el, i) => {
            switch (i) {
                case 0:
                    acc.language = el;
                    break;
                case 1:
                    acc.counts = el;
                    break;
                case 2:
                    acc.country = el;
                    break;
                case 3:
                    acc.skill = el;
                    break;
                case 4:
                    acc.cocountry = el;
                    break;
                default:
                    acc[el] = el;
                    break;
            }
            return acc;
        }, {}))
        .filter((e) => e.language && e.language !== 'язык');
    console.log(`Count: ${worlds.length}`);

    const uniqueCountry = worlds.reduce((acc, el, i) => {
        if (acc[worlds.country]) {
            acc[worlds.country] += 1;
        } else {
            acc[worlds.country] = 1;
        }
        return acc;
    }, {});
    console.log(`Continets: ${Object.keys(uniqueCountry).join(', ')}`);

    const amountLanguage = worlds.filter((e) => e.cocountry === 1);
    console.log(`Amount of languages with 1 country: ${amountLanguage}`);

    const maxPeople = worlds.reduce((acc, el, i) => {
        if (acc < worlds.counts) return worlds.counts;
        return acc;
    }, 0);

    const popularLanguage = worlds.filter((i) => i.cocountry === maxPeople)
        .map((i) => i.language)
    console.log(`The mast popular language: ${popularLanguage[0]}`)

    



}


export default ShowInfo
