
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 10,
    rate: 4.5
  };
  expect(calculateMonthly(values)).toEqual('103.64');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 900,
    years: 10,
    rate: 4.5
  };
  expect(calculateMonthly(values)).toEqual('9.33');
});
