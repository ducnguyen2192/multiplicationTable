let i = 0;
let j = 0;

document.write("<div style='width: 100%;height: 100%'>")
document.write("<table style='border-width: 1px;border-style: solid; width: 100%; height: 100%'>")
for(i=1;i<=9;i++) {
    document.write("<tr style='border-style: solid; border-width: 1px'>")
        for(j =2; j <=9; j++){
            document.write("<td style='border-style: solid; border-width: 1px'>")
            var k = i.toString();
            var l = j.toString();
            document.write( l + " x " + k + "=" + i*j)
            document.write("</td>")
        }
    document.write("</tr>")
}
document.write("</table>")
document.write("</div>")
