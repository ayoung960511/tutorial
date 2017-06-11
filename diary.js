 var config = {
    apiKey: "AIzaSyBiJ4WOl-xB-dlcj1u1aI4xXE_pkiZUoBA",
    authDomain: "diary-5f9bc.firebaseapp.com",
    databaseURL: "https://diary-5f9bc.firebaseio.com",
    projectId: "diary-5f9bc",
    storageBucket: "diary-5f9bc.appspot.com",
    messagingSenderId: "904505867390"
  };
  firebase.initializeApp(config);
  var diarylists = firebase . database (). ref ( "diarylists" );
  var submitDiarylist = function () { 
   var title = $ ( "#writeTitle" ). val (); 
   var date = $ ( "#writeDate" ). val (); 
   var content = $ ( "#writeContent" ). val (); 
   var hashtag = $ ( "#writeHashtag" ). val (); 
 
   diarylists.push ({ 
    "title" : title , 
    "date" : date , 
    "content" : content,
    "hashtag" : hashtag 
  }); 
 }; 

 var idx = 1;
    var idx_p = 1;
    var page = 2;
    $(document).ready(function () {
      $(window).scroll(function() {
        if (jQuery(window).scrollTop() == $(document).height() - $(window).height()) {
          var newDiv=document.createElement('div'); 
          newDiv.innerHTML= idx+'로딩중입니다';
          newDiv.setAttribute('id','more'+idx); 
          setTimeout(function(){
            morediv = '#more'+idx;
            morediv_p = '#more'+idx_p;
            var reload_href_full ='http://internetbat.com/index.php?mid={$mid}&page='+page+'#list';
            $(newDiv).insertBefore('#list_load_deobogi' );
            $(morediv).load(reload_href_full).fadeIn(1000).delay(5000);
            page++;
            idx++;
            idx_p++;
          }, 1000);
        }
      });
    });

    function addItem() {
      var lo_table = document.getElementById("TblAttach");
      var row_index = lo_table.rows.length;      
      newTr = lo_table.insertRow(row_index);
      newTr.idName = "newTr" + row_index;
 
      newTd=newTr.insertCell(0);
      newTd.innerHTML= "#" + (row_index-1);
 
      newTd=newTr.insertCell(1);
      newTd.align = "center";
      newTd.innerHTML= writeTitle;

      newTd=newTr.insertCell(2);
      newTd.align = "center";
      newTd.innerHTML= writeDate;
    }

    function delItem(){
      var lo_table = document.getElementById("TblAttach");
      var row_index = lo_table.rows.length-1;      
 
      if(row_index > 0) lo_table.deleteRow(row_index);    
    }

    var hashtag = document.getElementById("writeHashtag").innerHTML;
    var splitedArray = hashtag.split(' ');
    var linkedContent = '';
    for(var word in splitedArray){
      word = splitedArray[word];
      if(word.indexOf('#') == 0){
        checkName();
      }
     linkedContent += word+' ';
    }
    document.getElementById('writeHashtag').innerHTML = linkedContent; 

    function checkName(){
     var input = document.getElementById("search");
     var lists = document.getElementById("title");
     for(var i = 0; i<title.length; i++){
      var text = title.innerText;
      if(text.indexOf(input.value) >= 0){
         list.style.color = "blue";
      }
      else{
        list.style.color = "black";
      }
     } 
    }
    function enterkey(){
      if(window.event.keyCode == 13){
        checkName();
      }
    }