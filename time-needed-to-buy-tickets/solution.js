/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let marker = k;
    let time = 0;
    let arr = tickets;

    while(arr[marker] > 0){
        if(arr[0] === 1 && marker == 0){
            time++;
            return time;
        } else {
            if((arr[0] - 1) > 0){
                arr.push(arr[0] - 1);
                arr.shift();
                marker--;
                time++;
            } else {
                arr.shift();
                marker--;
                time++;
            }
            
            if(marker < 0){
                marker = arr.length - 1;
            }
        }
    }
    return time;
};