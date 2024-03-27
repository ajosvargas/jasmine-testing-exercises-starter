describe('Gives you total amount and tip percentage', function(){

    it('should sum the total tips', function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 50;
    
        submitPaymentInfo();
    
        expect(sumPaymentTotal('tipAmt')).toEqual(50);
    });

    it('should give you back a percentage for the total amount of bill and tip', ()=>{
        expect(calculateTipPercent(100, 10)).toEqual(10);
    });

    afterEach(()=>{
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    })
});