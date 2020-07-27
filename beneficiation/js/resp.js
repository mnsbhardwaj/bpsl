//Manish Bhardwaj js script

//Script for menu bar in mobile (burger symbol)
burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navlist = document.querySelector(".navlist");
navright = document.querySelector(".rightnav");

burger.addEventListener("click", function () {
  navbar.classList.toggle("h-nav-res");
  navlist.classList.toggle("v-class-res");
  navright.classList.toggle("v-class-res");
});

navlist.addEventListener("click", function () {
  navbar.classList.add("h-nav-res");
  navlist.classList.add("v-class-res");
  navright.classList.add("v-class-res");
});

//Script for collapsable button 
var acc = document.getElementsByClassName("accordion");
var pp = document.getElementsByClassName("panel");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      // pp.style.display = "none";
      panel.style.display = "none";
    } else {
      //pp.style.display = "none";
      panel.style.display = "block";
    }
  });
}

//script for hight calculation in stock pile calculation
function calculate_h() {
  var angle = document.getElementById("ang").value || 0;
  var hight = document.getElementById("h").value || 0;
  var width = document.getElementById("w").value || 0;

  angle = parseFloat(angle).toFixed(2);
  hight = parseFloat(hight).toFixed(2);
  width = parseFloat(width).toFixed(2);

  if (angle > 0) {
    var result = parseFloat(Math.tan(angle * Math.PI / 180) * width).toFixed(2);
  } else {
    var result = parseFloat(hight).toFixed(2);
  }

  document.getElementById("ch").value = result;
}

//script for volume and tonnage calculation in stock pile calculation
function calculate_stp() {

  var type = document.getElementById("type").value || 0;
  var swgt = document.getElementById("swgt").value || 0;
  var wt = document.getElementById("wt").value || 0;
  var w = document.getElementById("w").value || 0;
  var l = document.getElementById("l").value || 0;
  var ch = document.getElementById("ch").value || 0;

  type = parseFloat(type).toFixed(5);
  swgt = parseFloat(swgt).toFixed(2);
  wt = parseFloat(wt).toFixed(2);
  w = parseFloat(w).toFixed(2);
  l = parseFloat(l).toFixed(2);
  ch = parseFloat(ch).toFixed(2);

  var base_v = parseFloat((parseFloat(w) + parseFloat(wt)) * l * ch).toFixed(1);
  var base_t = parseFloat(base_v * swgt).toFixed(0);
  if (type > 0) {
    var end_v = parseFloat(parseFloat(w * wt * ch) + parseFloat(w * w * ch * type)).toFixed(1);
  } else {
    var end_v = 0;
  }
  var end_t = parseFloat(end_v * swgt).toFixed(0);
  var total_v = parseFloat(base_v) + parseFloat(end_v);
  var total_t = parseFloat(base_t) + parseFloat(end_t);

  document.getElementById("basev").value = base_v;
  document.getElementById("baset").value = base_t;
  document.getElementById("endv").value = end_v;
  document.getElementById("endt").value = end_t;
  document.getElementById("totalv").value = total_v;
  document.getElementById("totalt").value = total_t;
}

//script for reset in stock pile calculation
function formReset() {
  document.getElementById("frm1").reset();
}

//script for % of solid calculation in Mineral Process calculation
function calculate_f21() {

  var s = document.getElementById("f21s").value || 0;
  var sl = document.getElementById("f21sl").value || 0;
  var f = document.getElementById("f21f").value || 0;

  s = parseFloat(s).toFixed(2);
  sl = parseFloat(sl).toFixed(2);
  f = parseFloat(f).toFixed(2);

  var ps = parseFloat((s * (sl - 1)) / (sl * (s - 1)) * 100).toFixed(2);

  document.getElementById("f21ps").value = ps;
  document.getElementById("f21tph").value = parseFloat(ps * f * sl / 100).toFixed(0);
}

//script for reset in % of solid calculation in Mineral Process calculation
function formReset21() {
  document.getElementById("frm2_1").reset();
}

//script for Flow1 calculation in Mineral Process calculation
function selection22() {
  var cho = document.getElementById("f22cho").value;

  document.getElementById("f22ch").innerHTML = "Choose Result - " + cho;

  if (cho == "F") {
    Rtag = "Flow of Mix Slurry - F";
    Runit = "m³/hr";
    document.getElementById("f22f").value = "";
    document.getElementById("f22f").readOnly = true;
    document.getElementById("f22f1").readOnly = false;
    document.getElementById("f22f2").readOnly = false;
    document.getElementById("f22d").readOnly = false;
  } else if (cho == "F1") {
    Rtag = "Slurry-1 Flow - F1";
    Runit = "m³/hr";
    document.getElementById("f22f1").value = "";
    document.getElementById("f22f1").readOnly = true;
    document.getElementById("f22f").readOnly = false;
    document.getElementById("f22f2").readOnly = true;
    document.getElementById("f22d").readOnly = false;
  } else if (cho == "F2") {
    Rtag = "Slurry-2 Flow - F2";
    Runit = "m³/hr";
    document.getElementById("f22f2").value = "";
    document.getElementById("f22f2").readOnly = true;
    document.getElementById("f22f").readOnly = false;
    document.getElementById("f22f1").readOnly = true;
    document.getElementById("f22d").readOnly = false;
  } else if (cho == "D") {
    Rtag = "Mix Slurry Density - s";
    Runit = "g/cc";
    document.getElementById("f22d").value = "";
    document.getElementById("f22d").readOnly = true;
    document.getElementById("f22f").readOnly = false;
    document.getElementById("f22f1").readOnly = false;
    document.getElementById("f22f2").readOnly = false;
  }
  document.getElementById("f22result_t").innerHTML = Rtag;
  document.getElementById("f22result_u").innerHTML = Runit;
}


function calculate_f22() {
  var cho = document.getElementById("f22cho").value;
  var d1 = document.getElementById("f22d1").value || 0;
  var d2 = document.getElementById("f22d2").value || 0;
  var d = document.getElementById("f22d").value || 0;
  var f1 = document.getElementById("f22f1").value || 0;
  var f2 = document.getElementById("f22f2").value || 0;
  var f = document.getElementById("f22f").value || 0;

  d1 = parseFloat(d1).toFixed(2);
  d2 = parseFloat(d2).toFixed(2);
  d = parseFloat(d).toFixed(2);
  f1 = parseFloat(f1).toFixed(2);
  f2 = parseFloat(f2).toFixed(2);
  f = parseFloat(f).toFixed(2);

  if (cho == "F") {
    if (f1 > 0) {
      var result = parseFloat(f1 * (d1 - d2) / (d - d2)).toFixed(1);
    } else {
      var result = parseFloat(f2 * (d2 - d1) / (d - d1)).toFixed(1);
    }
  } else if (cho == "F1") {
    var result = parseFloat(f * (d - d2) / (d1 - d2)).toFixed(1);
  } else if (cho == "F2") {
    var result = parseFloat(f * (d - d1) / (d2 - d1)).toFixed(1);
  } else if (cho == "D") {
    var flow = parseFloat(f1) + parseFloat(f2);
    var result = parseFloat((parseFloat(f1 * d1) + parseFloat(f2 * d2)) / flow).toFixed(1);
  }
  document.getElementById("f22result_v").value = result;
}

//script for hidden f1 f2 in Mineral Process calculation
function hide_f() {
  var cho = document.getElementById("f22cho").value;
  var f1 = document.getElementById("f22f1").value;
  var f2 = document.getElementById("f22f2").value;

  if (cho == "D") {
    document.getElementById("f22f1").readOnly = false;
    document.getElementById("f22f2").readOnly = false;
    var flow = parseFloat(f1) + parseFloat(f2);
    document.getElementById("f22f").value = flow;
    document.getElementById("f22f").readOnly = true;
  } else {
    if (f1 > 0) {
      document.getElementById("f22f2").readOnly = true;
    } else {
      document.getElementById("f22f1").readOnly = true;
    }
  }
}

//script for reset in % of solid calculation in Mineral Process calculation
function formReset22() {
  document.getElementById("frm2_2").reset();
  document.getElementById("f22f1").readOnly = false;
  document.getElementById("f22f2").readOnly = false;
}

//script for conc and tail tonnage in Mineral Process calculation
function calculate_f23() {

  var ff = document.getElementById("f23f").value || 0;
  var fc = document.getElementById("f23c").value || 0;
  var ft = document.getElementById("f23t").value || 0;
  var tf = document.getElementById("f23ft").value || 0;

  ff = parseFloat(ff).toFixed(2);
  fc = parseFloat(fc).toFixed(2);
  ft = parseFloat(ft).toFixed(2);
  tf = parseFloat(tf).toFixed(2);

  var tc = parseFloat(tf * (ff - ft) / (fc - ft)).toFixed(1);
  var tt = parseFloat(tf * (fc - ff) / (fc - ft)).toFixed(1);

  document.getElementById("f23ct").value = tc;
  document.getElementById("f23tt").value = tt;
}

//script for reset in conc and tail tonnage calculation in Mineral Process calculation
function formReset23() {
  document.getElementById("frm2_3").reset();
}

//script for reset in conc and tail tonnage calculation in Mineral Process calculation
function formReset3() {
  document.getElementById("frm3").reset();
}

//script for calculate blending of material in mmaterial blending
function calculate_f3() {

  var feed = document.getElementById("f3tph").value || 0;
  var ra = document.getElementById("ra").value || 0;
  var rb = document.getElementById("rb").value || 0;
  var rc = document.getElementById("rc").value || 0;
  var rd = document.getElementById("rd").value || 0;

  var fa = document.getElementById("fa").value || 0;
  var fb = document.getElementById("fb").value || 0;
  var fc = document.getElementById("fc").value || 0;
  var fd = document.getElementById("fd").value || 0;

  var aa = document.getElementById("aa").value || 0;
  var ab = document.getElementById("ab").value || 0;
  var ac = document.getElementById("ac").value || 0;
  var ad = document.getElementById("ad").value || 0;

  var sa = document.getElementById("sa").value || 0;
  var sb = document.getElementById("sb").value || 0;
  var sc = document.getElementById("sc").value || 0;
  var sd = document.getElementById("sd").value || 0;

  var oa = document.getElementById("oa").value || 0;
  var ob = document.getElementById("ob").value || 0;
  var oc = document.getElementById("oc").value || 0;
  var od = document.getElementById("od").value || 0;

  feed = parseFloat(feed).toFixed(2);
  ra = parseFloat(ra).toFixed(2);
  rb = parseFloat(rb).toFixed(2);
  rc = parseFloat(rc).toFixed(2);
  rd = parseFloat(rd).toFixed(2);

  fa = parseFloat(fa).toFixed(2);
  fb = parseFloat(fb).toFixed(2);
  fc = parseFloat(fc).toFixed(2);
  fd = parseFloat(fd).toFixed(2);

  aa = parseFloat(aa).toFixed(2);
  ab = parseFloat(ab).toFixed(2);
  ac = parseFloat(ac).toFixed(2);
  ad = parseFloat(ad).toFixed(2);

  sa = parseFloat(sa).toFixed(2);
  sb = parseFloat(sb).toFixed(2);
  sc = parseFloat(sc).toFixed(2);
  sd = parseFloat(sd).toFixed(2);

  oa = parseFloat(oa).toFixed(2);
  ob = parseFloat(ob).toFixed(2);
  oc = parseFloat(oc).toFixed(2);
  od = parseFloat(od).toFixed(2);

  var rrs = parseFloat(ra) + parseFloat(rb) + parseFloat(rc) + parseFloat(rd);
  document.getElementById("rr").value = rrs;
  document.getElementById("fr").value = blend(fa, fb, fc, fd);
  document.getElementById("ar").value = blend(aa, ab, ac, ad);
  document.getElementById("sr").value = blend(sa, sb, sc, sd);
  document.getElementById("or").value = blend(oa, ob, oc, od);
  document.getElementById("ta").value = feed * ra / rrs;
  document.getElementById("tb").value = feed * rb / rrs;
  document.getElementById("tc").value = feed * rc / rrs;
  document.getElementById("td").value = feed * rd / rrs;
  document.getElementById("tr").value = feed * rr / rrs;

  if (rrs !== 100) {
    // var check_r = function () {
    alert("Sum of Ratio sould be = 100%. Ratio value is not correct! please enter valid value");
    // this.value = "";
    // }
    // document.getElementById('ra').onchange = check_r;
    // document.getElementById('rb').onchange = check_r;
    // document.getElementById('rc').onchange = check_r;
    // document.getElementById('rd').onchange = check_r;
  }

  function blend(x, y, z, m) {
    return parseFloat((parseFloat(ra * x) + parseFloat(rb * y) + parseFloat(rc * z) + parseFloat(rd * m)) / rrs).toFixed(2);
  }
}

//script for percentage in mmaterial blending
function ratio() {
  var feed = document.getElementById("f3tph").value || 0;
  var ra = document.getElementById("ra").value || 0;
  var rb = document.getElementById("rb").value || 0;
  var rc = document.getElementById("rc").value || 0;

  feed = parseFloat(feed).toFixed(2);
  ra = parseFloat(ra).toFixed(2);
  rb = parseFloat(rb).toFixed(2);
  rc = parseFloat(rc).toFixed(2);

  if (feed > 0 && (ra == 0 && (rb == 0 && rc == 0))) {
    document.getElementById("ra").readOnly = false;
    document.getElementById("rb").readOnly = true;
    document.getElementById("rc").readOnly = true;
    document.getElementById("rd").readOnly = true;
  }
  if (feed > 0 && (ra > 0 && (rb == 0 && rc == 0))) {
    document.getElementById("ra").readOnly = false;
    document.getElementById("rb").readOnly = false;
    document.getElementById("rc").readOnly = true;
    document.getElementById("rd").readOnly = true;
  }
  if (feed > 0 && (ra > 0 && (rb > 0 && rc == 0))) {
    document.getElementById("ra").readOnly = false;
    document.getElementById("rb").readOnly = false;
    document.getElementById("rc").readOnly = false;
    document.getElementById("rd").readOnly = true;
  }
  if (feed > 0 && (ra > 0 && (rb > 0 && rc > 0))) {
    document.getElementById("ra").readOnly = false;
    document.getElementById("rb").readOnly = false;
    document.getElementById("rc").readOnly = false;
    document.getElementById("rd").readOnly = false;
  }
}

//script for contact us
$(document).ready(function () {
  $('#websend').click(function () {

    var v1 = document.getElementById("name").value;
    var v2 = document.getElementById("email").value;
    var v3 = document.getElementById("concern").value;
    if ((v1 !== "" && (v2 !== "" && v3 !=="")) && (v1 !== null &&(v2 !== null && v3 !== null))) {
      $.post("https://maker.ifttt.com/trigger/contact/with/key/mXT9vs8AOdX_f9MwBI0JaPST6mGXc7ONz7u2MeGQ95E",
        { "value1": v1, "value2": v2, "value3": v3 },
        function () {
          alert("Sucess");
        });
      document.getElementById("aftrsmt").style.display = "block";
      document.getElementById("contact").style.display = "none";
      alert("Your concern submitted to Manish Bhardwaj. Please check your Email Id - " + v2 + " for acknowledgement");            
    } else {
      alert("Please fill All Detail to contact us!");
    }
  });
});