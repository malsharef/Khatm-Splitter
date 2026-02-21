import quranData from './data/quran.json';

export const calculateDistribution = (names, cycle = 0) => {
    if (!names || !Array.isArray(names) || names.length === 0) {
        return [];
    }
    const totalPages = 603;
    const count = names.length;
    if (count === 0) return [];

    const rotated = rotateNames(names, cycle);
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

        const startData = quranData[start];
        const endData = quranData[end];

        const startSurahNum = startData ? Object.keys(startData)[0] : "?";
        const endSurahKeys = endData ? Object.keys(endData) : [];
        const endSurahNum = endSurahKeys.length > 0 ? endSurahKeys[endSurahKeys.length - 1] : "?";

        const startAyahRange = startData ? startData[startSurahNum] : [0, 0];
        const endAyahRange = endData ? endData[endSurahNum] : [0, 0];
        currentPage = end + 1;

        return {
            name: name,
            startPage: start,
            endPage: end,
            startSurah: startSurahNum,
            endSurah: endSurahNum,
            startAyah: startAyahRange[0],
            endAyah: endAyahRange[1]
        };
    });
};

export const rotateNames = (names, cycle) => {
    if (!Array.isArray(names)) return [];
    const rotatedNames = [...names]; //Kopie
    for (let i = 0; i < cycle % names.length; i++) {
        rotatedNames.push(rotatedNames.shift());
    }
    return rotatedNames;
}