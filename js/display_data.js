var i;

for (i = 0; i < 50; i++) {
    // Your existing code unmodified...
    var iDiv = document.createElement('div');
    var iDivName = document.createElement('h3');
    var iDivPara = document.createElement('p');
    iDiv.appendChild(iDivName);
    iDiv.appendChild(iDivPara);
    iDiv.id = 'block' + i;
    iDiv.className = 'card';
    document.getElementsByClassName('container')[0].appendChild(iDiv);
    document.getElementById("block" + i).style.width = "20%";
    document.getElementById("block" + i).style.display = "inline-block";
    document.getElementById("block" + i).style.margin = "20px";

    // Now create and append to iDiv
    var innerDiv = document.createElement('div');
    innerDiv.className = 'block-2';

    // The variable iDiv is still good... Just append to it.
    iDiv.appendChild(innerDiv);
}