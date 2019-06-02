

var ids = [20044430, 20044876, 20048042, 20046065, 20047460, 20045742, 20042355, 20037524]
// , 20037227, 20046316, 20047918, 20039891, 20039980, 20046433, 20039164, 20045380, 20041076, 20040779, 20045695, 20038959, 20048129, 20043410, 20040002, 20041384, 20047425, 20040485, 20046277, 20038948, 20043310, 20045309, 20040182, 20042842, 20047184, 20046709, 20041321, 20047051, 20038619, 20039314, 20040868, 20036169, 20047015, 20042147, 20039863, 20039892, 20037366, 20045791, 20039402, 20047170, 20044326, 20047662, 20039335, 20039481, 20046675, 20045717, 20047904, 20036776, 20036194, 20047587, 20040636, 20042184, 20031730, 20044679, 20037562, 20031443, 20031693, 20037813, 20038869, 20038852, 20041021, 20045110, 20047161, 20031854, 20028454, 20042421, 20038374, 20027281, 20034038, 20045373, 20035818, 20036450, 20039589, 20033728, 20035245, 20038698, 20044378, 20035077, 20036509, 20044167, 20043408, 20043675, 20027838, 20042494, 20046239, 20037019, 20041506, 20038872, 20038476, 20045244, 20038683, 20042779, 20044897, 20036833, 20042441, 20039047, 20038032, 20041865, 20037116, 20046930, 20037962, 20038879, 20045452, 20027733, 20035893, 20035983, 20038493, 20040935, 20027943, 20045355, 20045615, 20043255, 20044318, 20028108, 20025886, 20038790, 20029247, 20032022, 20032979, 20038645, 20027116, 20031156, 20040730, 20031758, 20028666, 20029319, 20030618, 20034699, 20045283, 20027532, 20020862, 20033776, 20046038, 20026378, 20041549, 20031539, 20022485, 20033164, 20040021, 20033551, 20037763, 20029661, 20026297, 20030486, 20042699, 20045692, 20038751, 20028057, 20026402, 20024817, 20038663, 20038632, 20040633, 20029466, 20028203, 20029420, 20027295, 20036080, 20037082, 20029981, 20039514, 20045238, 20040062, 20025395, 20022534, 20035353, 20034452, 20025485, 20034841, 20022708, 20034891, 20042878, 20042959, 20031655, 20021759, 20040897, 20029476, 20024448, 20033317, 20032676, 20020997, 20026710, 20031403, 20025446, 20033519, 20026697, 20038151, 20037452, 20029911, 20028625, 20028566, 20029376, 20043891, 20036437, 20030261, 20027581, 20025871, 20035791, 20030065, 20027470, 20040347, 20036907, 20030150, 20030681, 20032847, 20026101, 20037957, 20043245, 20028115, 20035611, 20020664, 20025321, 20020644, 20027194, 20036195, 20031573, 20027493, 20036819, 20028686, 20039998, 20020947, 20034999, 20028822, 20039652, 20029781, 20022086, 20025227, 20026620, 20023119, 20028836, 20021568, 20034797, 20040966, 20023600, 20021348, 20028370, 20029966, 20026467, 20021129, 20033814, 20033770, 20033941, 20021051, 20022177, 20021289, 20022593, 20038428, 20028817, 20025906, 20020553, 20022268, 20024318, 20036615, 20032010, 20028466, 20039406, 20043989, 20021615, 20022186, 20027003, 20031056, 20025060, 20023096, 20029492, 20031788, 20033313, 20034786, 20034696, 20031464, 20034785, 20036152, 20036821, 20024943, 20026876, 20022693, 20033599, 20028812, 20035848, 20029991, 20024902, 20021923, 20042407, 20021627, 20026454, 20031570, 20037077, 20033958, 20020837, 20028811, 20027792, 20031103, 20021521, 20033782, 20024623, 20027251, 20037409, 20023400, 20026509, 20029833, 20036163, 20031673, 20033608, 20033499, 20025862, 20034226, 20035459, 20027066, 20036680, 20026849, 20025018, 20034456, 20031823, 20025312, 20034215, 20035289, 20029106, 20036101, 20033742, 20027976, 20033644, 20037051, 20022424, 20039154, 20037160, 20032462, 20026373, 20035326, 20028669, 20038570, 20022512, 20023151, 20029954, 20026503, 20033869, 20032686, 20026797, 20027752, 20029418, 20027586, 20028833, 20031838, 20025164, 20036296, 20035171, 20030932, 20026136, 20022779, 20035473, 20029350, 20026102, 20029077, 20021127, 20028847, 20025532, 20028389, 20026186, 20024170, 20022564, 20024827, 20024809, 20023785, 20020542, 20026713, 20026569, 20026367, 20029836, 20024166, 20025712, 20034059, 20025358, 20025005, 20024949, 20023138, 20046771, 20034080, 20023383, 20022886, 20026424, 20022115, 20030919, 20021373, 20041487, 20025913, 20031957, 20024816, 20041274, 20025732, 20039248, 20029844, 20023209, 20029519, 20027423, 20023908, 20038006, 20037943, 20029464, 20036591, 20024088, 20026888, 20034411, 20023520, 20039465, 20032031, 20030375, 20028915, 20022168, 20023593, 20042093, 20040001, 20039876]



// var by;
// var type;
// var time;
var newrow;
var cell1;
var cell2;
var cell3;
var cell4;

var table = document.getElementById("table");
for (var i = 0; i < ids.length; i++) {

   var j = i + 1;
   row = table.insertRow(i);
   cell1 = row.insertCell(0);
   cell2 = row.insertCell(1);
   cell3 = row.insertCell(2);
   cell4 = row.insertCell(3);

   var url = "https://hacker-news.firebaseio.com/v0/item/" + ids[i] + ".json?print=pretty";

   var fet = fetch(url)
   fet.then(resp => resp.json())
      .then(function (data) {
         cell1.innerHTML = data.id;
         cell2.innerHTML = data.by;
         cell3.innerHTML = data.type;
         cell4.innerHTML = data.time;
         console.log(cell1.innerHTML);
      });
}
console.log(j);



