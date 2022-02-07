$j = jQuery.noConflict();

$j('#descriptionmodule').next().remove();
var forms = $j("#linkingmodule").next();
forms.next().remove();
forms.remove();
