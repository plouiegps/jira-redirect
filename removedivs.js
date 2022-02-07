$j = jQuery.noConflict();

$j('#descriptionmodule').next().remove();
var forms = $j("#attachmentmodule").next();
forms.next().remove();
forms.remove();
