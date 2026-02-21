import quranData from '../data/quran.json';

export const calculateDistribution = (names, cycle = 0) => {
    const totalPages = 603;
    const count = names.length;
    if (count === 0) return [];

    const rotated = rotateNames(names, cycle );
    const pagesPerPerson = Math.floor(totalPages / count);
    let remainder = totalPages % count;

    let currentPage = 1;



    return rotated.map((name) => {
        let start = currentPage;
        let end = start + pagesPerPerson - 1;

        if (remainder > 0) {
            end += 1;
            remainder -= 1;
        }


        currentPage = end + 1;

        return {
            name: name,
            start: start,
            end: end
        };
    });
};

 export const rotateNames = (names, cycle) => {
    const rotatedNames = [...names]; //Kopie
    for (let i = 0; i < cycle% names.length; i++) {
        rotatedNames.push(rotatedNames.shift());

    }
    cycle++;
    return rotatedNames;
}