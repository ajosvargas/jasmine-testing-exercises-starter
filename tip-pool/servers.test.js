describe("Servers test", function() {
  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
    expect(serverNameInput.value).toEqual('');
  });

  it('should pass table row with server name to appendTd function', function() {
    submitServerInfo()
    updateServerTable();

    let currentList = document.querySelectorAll('#serverTable tbody tr td');

    expect(currentList.length).toEqual(3);
    expect(currentList[0].innerHTML).toEqual('Alice');
  });

  afterEach(function() {
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});
