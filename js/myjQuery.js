$(document).ready(function () { // this document .ready is used bcoz there may be some errors in the future if the document is not fullly loaded and you are performing som actions on it before it's loaded so when we make us of this then it make sure that only after the document is fully loaded only then we can perform the actions that have been listed
      //$(function () { //this can also be used instead of above line(shortcut)
        console.log("we are using jquery");


    //jquery syntax looks like this
    //$('selector').action();

        //clicks on all p elements. this is an example of element selector
    // $('p').click();  
        $('p').click(function() {
        console.log("you clicked on p",this);//this action will be processed when clicked on p
        
        //$('p').hide(); // this hides the test once clicked on p .here all p tags will be hidden if clicked on any one p tag data . if we want to hide only that particular data that has been clicked then this can be done by using this key word
        // $(this).hide(); 
        // $('#id').hide(); //for ids
        // $('.class').hide(); // for classes
        });
        $('p').dblclick(function() {
            console.log("you double clicked on p",this);
         });
        $('p').mouseenter(function() {
        console.log("you entered:",this);
        });
    
          
            

    // there are three types of selectors
    // 1.Element selector - this is an example for element selector
     //$('p').click();
     
    // 2.id selector - example
    //$('#second').click();

    // 3.class selector -example
    //$('.odd').click();

    //other selectors
    // $('*').click(); //clicks on all the selectors
    // $('p.odd').click();//clicks all paragraphs with class odd
   // $('p:first').click();//clicks the first paragraph among all the p tags


   //events in jquery
   //mouse events = click, dblclick, mouseenter, mouseleave
   //keyboard events = keypress, keydown, keyup
   //form events = submit, change, focus, blur
   //document/window events = load, resize, scrolls, unload

});
