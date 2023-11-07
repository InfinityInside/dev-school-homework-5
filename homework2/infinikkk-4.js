const truck =
    [
        [ '_HHH_', '[║║║║]', '[@@]', '[((((]' ],
        [ '[jlll]', '[║║║║]', 'k', '[1111]', 'FUDGE' ],
        [ '[))))]', 'zz', 'k', '(----)', 'GoOoOo' ],
        [],
        [ '[¦¦-¦]' ],
        [ '[║║║║║]' ],
        [ '[)(((]', '(----)' ],
        [ '[¦¦-¦]', '(iiii]', 'FUDGE', '(@@@@)', 'zz' ],
        [ '[((((]', '[IIII', '[))))]', '[1111]' ],
        [ '[@@@@]', 'LARD', '[¦¦-¦]', '¨¨¨¨¨¨¨¨', 'IuI', '(----)' ],
        [ 'UwU', '[1111]' ],
        [
            '[((((]', 'FUDGE',
            'LARD',   '(IIII)',
            'IIII',   '[i|||]',
            '[||||]'
        ],
        [
            '[jlll]', '[1111]',
            'IuI',    '[║║║║║]',
            '[@@@@]', '(iiii]',
            'zz'
        ],
        [
            '(----)',  '[llll]',
            'OoOoOoO', '[IIII',
            'OoOoOoO', '[))))]',
            '[@@]',    '(IIII)',
            '[llll]'
        ],
        [ 'IIII', '(iiii]', '(iiii]', 'IIII' ],
        [ '[¦¦-¦]', '[))))]' ],
        [
            '[¦¦¦¦]', '1337',
            '[jlll]', '[||||]',
            'IuI',    'zz',
            '[@@@@]', '_HHH_',
            '[)(((]'
        ],
        [ 'IIII', '[jlll]', '[((((]' ],
        [
            '[IIII]', 'zz',
            '[i|||]', '[IIII]',
            '[))))]', '¨¨¨¨¨¨¨¨',
            '[))))]', '[jlll]'
        ],
        [
            'zz',      '[@@]',
            'IuI',     '[║║║║]',
            '[))1)]',  'GoOoOo',
            '[║║║║║]', '(@@@@)',
            '[)(((]'
        ],
        [ '[))1)]', 'LARD' ],
        [
            '[i|||]', '[))1)]',
            '[111@]', '¨¨¨¨¨¨¨¨',
            'k',      '(IIII)',
            'IuI'
        ],
        [ '(----)', '[((((]', '[¦¦¦¦]', 'X' ],
        [
            '_HHH_',  'LARD',
            'IuI',    'OoOoOoO',
            '[))1)]', '[jlll]',
            '[IIiI]', 'X',
            '1337'
        ],
        [],
        [ '[))1)]', 'GoOoOo', '[))))]', '[IIII', '[))))]' ],
        [
            '[llll]', '[1111]',
            '(iiii]', '(----)',
            '(@@@@)', '[║║║║]',
            'zz',     'zz'
        ],
        [],
        [ 'LARD', '[))1)]', '[¦¦-¦]', '[IIII]', '[111@]', '1337' ],
        [ '[1111]', '[¦¦¦¦]', 'IuI', '[)(((]' ]
    ];

const unpackSausages = (delivery) => {
    const result = [];
    for(const box of delivery){
        if (box.length===0)continue;
        for (const pack of box){
            if (pack.includes("[") && pack.includes("]") && pack.length===6){
                let spoiled = false;
                let cur;
                for (let i = 1; i < pack.length-1; i++){
                    if (i === 1) cur = pack[1];
                    if (cur !== pack[i]) spoiled=true;
                }
                if (!spoiled) result.push(pack);
            }
        }
    }
    for (let i = 4; i<result.length; i+=4)
        result.splice(i,1)

    for (let i = 0; i <result.length; i++){
        result[i] = result[i].slice(1,result[i].indexOf("]"));
        result[i] = result[i].split("").join(" ");
    }
    return result.join(" ");
}
console.log(unpackSausages(truck));