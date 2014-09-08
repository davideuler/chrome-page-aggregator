// Saves options to chrome.storage
function save_options() {
  var urls = document.getElementById('urls').value;
  var urls2 = document.getElementById('urls2').value;
  var enableBoth = document.getElementById('enableBoth').checked;
  chrome.storage.sync.set({
    urls: urls,
	urls2:urls2,
	enableBoth:enableBoth
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 500);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    urls: '',
	urls2:'',
	enableBoth:''
  }, function(items) {
	document.getElementById('urls').value = items.urls;
	document.getElementById('urls2').value = items.urls2;
	document.getElementById('enableBoth').checked = items.enableBoth;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);