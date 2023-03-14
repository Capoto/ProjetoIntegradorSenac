// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function verificaemail(){
 
    const form  = document.getElementById('testando').elements[1].value;
    const form2  = document.getElementById('testando');
    var text = document.getElementById('sign2');
    var pattern =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
  
    if(form.match(pattern)){
  
      form2.classList.add("valid");
      form2.classList.remove("invalid");
      text.innerHTML = "O e-mail é Valído";
      text.style.color = "#00ff00";
        
    }
    else{
      form2.classList.add("valid");
      form2.classList.remove("invalid");
      text.innerHTML = "O e-mail não é valído";
      
  
      text.style.color = "#ff0000";
       
    
        
  
      
    }
  
    if(form2===""){
      form2.classList.add("valid");
      form2.classList.remove("invalid");
      text.innerHTML = "O e-mail não é valído";
      
  
      text.style.color = "#ff0000";
    }
  }

  function passa1(){

    document.getElementById('imgid').src="img1.jpeg";
    setTimeout("passa2()", 5000)
    
    
    }
    
    function passa2(){
    
    document.getElementById('imgid').src="img2.jpeg";
    setTimeout("passa3()", 5000)
    
    
    }
    
    function passa3(){
    
    document.getElementById('imgid').src="img3.jpeg";
    setTimeout("passa1()", 5000)
    
    
    }


    function getPagination(table) {
        var lastPage = 1;
      
        $('#maxRows')
          .on('change', function(evt) {
            
      
           lastPage = 1;
            $('.pagination')
              .find('li')
              .slice(1, -1)
              .remove();
            var trnum = 0; // reset tr counter
            var maxRows = parseInt($(this).val()); // get Max Rows from select option
      
            if (maxRows == 5000) {
              $('.pagination').hide();
            } else {
              $('.pagination').show();
            }
      
            var totalRows = $(table + ' tbody tr').length; // numbers of rows
            $(table + ' tr:gt(0)').each(function() {
              // each TR in  table and not the header
              trnum++; // Start Counter
              if (trnum > maxRows) {
                // if tr number gt maxRows
      
                $(this).hide(); // fade it out
              }
              if (trnum <= maxRows) {
                $(this).show();
              } // else fade in Important in case if it ..
            }); //  was fade out to fade it in
            if (totalRows > maxRows) {
              // if tr total rows gt max rows option
              var pagenum = Math.ceil(totalRows / maxRows); // ceil total(rows/maxrows) to get ..
              //	numbers of pages
              for (var i = 1; i <= pagenum; ) {
                // for each page append pagination li
                $('.pagination #prev')
                  .before(
                    '<li data-page="' +
                      i +
                      '">\
                                        <span>' +
                      i++ +
                      '<span class="sr-only">(current)</span></span>\
                                      </li>'
                  )
                  .show();
              } // end for i
            } // end if row count > max rows
            $('.pagination [data-page="1"]').addClass('active'); // add active class to the first li
            $('.pagination li').on('click', function(evt) {
              // on click each page
              evt.stopImmediatePropagation();
              evt.preventDefault();
              var pageNum = $(this).attr('data-page'); // get it's number
      
              var maxRows = parseInt($('#maxRows').val()); // get Max Rows from select option
      
              if (pageNum == 'prev') {
                if (lastPage == 1) {
                  return;
                }
                pageNum = --lastPage;
              }
              if (pageNum == 'next') {
                if (lastPage == $('.pagination li').length - 2) {
                  return;
                }
                pageNum = ++lastPage;
              }
      
              lastPage = pageNum;
              var trIndex = 0; // reset tr counter
              $('.pagination li').removeClass('active'); // remove active class from all li
              $('.pagination [data-page="' + lastPage + '"]').addClass('active'); // add active class to the clicked
              // $(this).addClass('active');					// add active class to the clicked
                limitPagging();
              $(table + ' tr:gt(0)').each(function() {
                // each tr in table not the header
                trIndex++; // tr index counter
                // if tr index gt maxRows*pageNum or lt maxRows*pageNum-maxRows fade if out
                if (
                  trIndex > maxRows * pageNum ||
                  trIndex <= maxRows * pageNum - maxRows
                ) {
                  $(this).hide();
                } else {
                  $(this).show();
                } //else fade in
              }); // end of for each tr in table
            }); // end of on click pagination list
            limitPagging();
          })
          .val(5)
          .change();
      
        // end of on select change
      
        // END OF PAGINATION
      }
      
      function limitPagging(){
          // alert($('.pagination li').length)
      
          if($('.pagination li').length > 7 ){
                  if( $('.pagination li.active').attr('data-page') <= 3 ){
                  $('.pagination li:gt(5)').hide();
                  $('.pagination li:lt(5)').show();
                  $('.pagination [data-page="next"]').show();
              }if ($('.pagination li.active').attr('data-page') > 3){
                  $('.pagination li:gt(0)').hide();
                  $('.pagination [data-page="next"]').show();
                  for( let i = ( parseInt($('.pagination li.active').attr('data-page'))  -2 )  ; i <= ( parseInt($('.pagination li.active').attr('data-page'))  + 2 ) ; i++ ){
                      $('.pagination [data-page="'+i+'"]').show();
      
                  }
      
              }
          }
      }
      
      $(function() {
        // Just to append id number for each row
        $('table tr:eq(0)').prepend('<th> ID </th>');
      
        var id = 0;
      
        $('table tr:gt(0)').each(function() {
          id++;
          $(this).prepend('<td>' + id + '</td>');
        });
      });
      
      function myFunction() {
        myVar = setTimeout(showPage, 1500);
      }
      
      function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
      }
  