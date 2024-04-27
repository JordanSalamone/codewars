function longestConsec(strarr, k) {
    if(k > strarr.length){
        return ''
    }else{
    let sorted = strarr.sort((a,b) => b.length - a.length),
        result = sorted.slice(0, k),
        longestCombo = ''

    result.forEach(str => longestCombo += str)
    if(k > 0){
    if(longestCombo.length > 1){
        return longestCombo
    }else{
        return ''
    }
    }else{
        return ''
    }}
}

// console.log(longestConsec(["dxendyedglg", "vghflsvltxvr", "vpjifphqpm", "oztcaswmccyo", "fgwimgjstkldcl", "ssssucjouw", "yqdxrvgiyjuesru", "xmzuggenjvyyrwz", "ooggvcuzp", "ewzwxuxqf", "nuenrdwl", "zfxpfmmpxpm", "uzlcfulgtaomsnv", "idzldiqdsfx", "advxdqfq", "gisgvyuojdleug", "trvmjujbbovj", "yvvpxmwmyiw", "cqlwwsonztbgoi", "rnxnkadpkezzi", "acwmxbmwc", "wqtpmajyvz", "cixrddtey", "ywjmdel", "uiktpgdgbwz", "gryczuyonnix", "uzpnusyqmfysm", "zbllbxoc", "hoitozsfeubr", "mlrkxxhowglrzmxc", "amlleils", "yttjnldx", "cswntmkkru", "zdemunh", "rlsgntsgvtnqt", "fvezzwy", "oaagwrzvxp", "wqblwekjf", "eckmynmpej", "prsfhyvrvk", "fkasvzmgrkx", "bkohfeqcsjq", "ruuoemeevatnjt", "hjwrrvprego", "mlicbugrhngjpy", "iboddjqcsuwf", "qtfjemtrkaxgzop", "luexqogfh", "yghwsm", "lmwtfqr", "ekuiulpy", "ikmicc", "yeutiwscxg", "lvgyhahoi", "bgdnkvvoss", "jxrsdz", "engilbkycpqchxfx", "zagyhdcqyxkcv", "qgxzlpeo", "eabihkf", "opgjgws", "bqilacybigphki", "rusmfdu", "asfebxw", "emtkbzyomndtju", "tcccpigs", "ippazrm", "gkjzfdfxbsa", "wywwgcrgqsyy", "xompymux", "qyqnfgdhlawoke", "yqprwdfwkvvmmgn", "cuiwvqyyv", "kcjmycc", "gyvikfpvgz", "kqwteifztvjf", "yeatpndlcdc", "dbgaxxtp", "xcuruob", "irfivk", "mmzxjsehpsec", "qgxamzsata", "pnheveqsoli", "rdogsnw", "gbibzbywm", "hhxznbvwzflzfa", "sdfhoqsgsjb", "rhftfpivg", "igxvllxc", "vcsmgjlcsth", "quarvwmhr", "mnmmplvpfmlcm", "ghndodpe", "gstaccxqmo", "buplsyze", "brmxzxno", "clobonx", "kssadorp", "zrqcszqjm", "ihhbwjknnxacg", "smjswratkmuy", "fabacvtz", "qsvwntrpv", "nvitpwdfee", "anhjrovvcuj", "ntcbllvvbphubo", "eepsgbkddad", "ftaajooub", "mtpwxzygldjud", "kisokdexlc", "avxlfovu", "leyzcz", "jjvkjkhyob", "jwqfildjpo", "hwnppwwtlc", "nykdniwkezj", "pwfcitnduggnfhq", "euvbanjicyl", "szixrlza", "zewndpyddcihz", "hazukxazdn", "pzdilytmpvs", "ejfrrcor", "bvyajampsi", "jsnmqrzsbazo", "dwhggtscniv", "otfyzjxkmgdhc", "dxnpir", "bosznifcbkdb", "kvpevdqdqbao", "qdoonglzdenn", "hukwrjmk", "vvtscwu", "ssuuksl", "bbqmez", "wiqsqdpwk", "tddutmwpfoq", "evvhhgfjjom", "yktqcygszlss", "cgtftphfvtvrrydtm", "ukkrmkjayo", "vohxweugs", "wrjqvgqgj"], 55))

// solution
function longestConsec(strarr, k) {
    let longest = "";
    for(let i=0;k>0 && i<=strarr.length-k;i++){
        let tempArray = strarr.slice(i,i+k);
        let tempStr = tempArray.join("");
        if(tempStr.length > longest.length){
            longest = tempStr;
        }
    }
    return longest;
}