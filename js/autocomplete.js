
$(document).ready(function() {

    $("#search-input").autocomplete({

      source: [
          { value: "Photoshop Website", url:'http://www.photoshop.com/'},
          { value: "Photoshop beginner", url:'http://hsinhualee.com/w5_team/beginner.html'},
          { value: "Photoshop Intermediate", url:'http://hsinhualee.com/w5_team/ps_intermediate.html'},
          { value: "Photoshop advanced", url:'http://hsinhualee.com/w5_team/ps_ad.html'},
          { value: "Illustrator Website", url:'http://www.adobe.com/products/illustrator.html'},
          { value: "Sketch", url:'hhttps://www.sketchapp.com/'},
          { value: "illustrator beginner", url:'http://hsinhualee.com/w5_team/aibeginner.html'},
          { value: "illustrator Intermediate", url:'http://hsinhualee.com/w5_team/aiintermediate.html'},
          { value: "Pentool", url:'http://bezier.method.ac/'},
      ],
      
    select: function(event, ui){
      window.parent.location = ui.item.url;
    }

    });
      

});
