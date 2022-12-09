/**FUNÇÃO PARA DESCOBRIR QUANTAS VEZES UM ELEMENTO APARECE EM JAVASCRIPT */
export function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}