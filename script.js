function Kerstboom()
{
    var opvulling = '*';
    var lijn;
    var maxLijnen = 37;
    for (var j=0; j<maxLijnen-7;j++)
    {
        var Links = '';
        for (var i = 0; i < (maxLijnen - opvulling.length);i++)
        {
            Links += '.';
        }
        lijn = Links + opvulling + Links + "<br>";
        opvulling += '*';
        document.write(lijn);
    }
    for (var i=0; i< 3;i++)
    {
        var Links = '';
        for (var j = 0; j < (maxLijnen - 7);j++)
        {
            Links += '.';
        }
        var lijn = Links + '*******'+Links + "<br>";
        document.write(lijn);
    }

}

