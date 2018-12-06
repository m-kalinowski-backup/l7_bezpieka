var mime_samples = [
  { 'mime': 'application/javascript', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/js/stealer.js/', 'dir': '_m0/0', 'linked': 2, 'len': 1816 } ]
  },
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'dir': '_m1/0', 'linked': 2, 'len': 3614 },
    { 'url': 'http://127.0.0.1:8000/about/', 'dir': '_m1/1', 'linked': 2, 'len': 2532 },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'dir': '_m1/2', 'linked': 5, 'len': 1806 },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'dir': '_m1/3', 'linked': 5, 'len': 1939 },
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'dir': '_m1/4', 'linked': 5, 'len': 3277 },
    { 'url': 'http://127.0.0.1:8000/register/', 'dir': '_m1/5', 'linked': 5, 'len': 5001 },
    { 'url': 'http://127.0.0.1:8000/static/', 'dir': '_m1/6', 'linked': 2, 'len': 1634 },
    { 'url': 'http://127.0.0.1:8000/login', 'dir': '_m1/7', 'linked': 5, 'len': 3911 },
    { 'url': 'http://127.0.0.1:8000/login', 'dir': '_m1/8', 'linked': 5, 'len': 68161 } ]
  },
  { 'mime': 'text/css', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/admin/css/base.css/', 'dir': '_m2/0', 'linked': 2, 'len': 16225 },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/login.css/', 'dir': '_m2/1', 'linked': 2, 'len': 1203 },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/responsive.css/', 'dir': '_m2/2', 'linked': 2, 'len': 17976 },
    { 'url': 'http://127.0.0.1:8000/static/banksite/main.css/', 'dir': '_m2/3', 'linked': 2, 'len': 1760 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/admin/', 'dir': '_m3/0', 'linked': 2, 'len': 59 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40201, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'https://code.jquery.com/jquery-3.2.1.slim.min.js', 'sid': '0', 'dir': '_i0/1' },
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', 'sid': '0', 'dir': '_i0/2' },
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', 'sid': '0', 'dir': '_i0/3' },
    { 'url': 'http://127.0.0.1:8000/about/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', 'sid': '0', 'dir': '_i0/4' },
    { 'url': 'http://127.0.0.1:8000/about/', 'extra': 'https://code.jquery.com/jquery-3.2.1.slim.min.js', 'sid': '0', 'dir': '_i0/5' },
    { 'url': 'http://127.0.0.1:8000/about/', 'extra': 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', 'sid': '0', 'dir': '_i0/6' },
    { 'url': 'http://127.0.0.1:8000/about/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', 'sid': '0', 'dir': '_i0/7' },
    { 'url': 'http://127.0.0.1:8000/logout/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', 'sid': '0', 'dir': '_i0/8' },
    { 'url': 'http://127.0.0.1:8000/logout/', 'extra': 'https://code.jquery.com/jquery-3.2.1.slim.min.js', 'sid': '0', 'dir': '_i0/9' },
    { 'url': 'http://127.0.0.1:8000/logout/', 'extra': 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', 'sid': '0', 'dir': '_i0/10' },
    { 'url': 'http://127.0.0.1:8000/logout/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', 'sid': '0', 'dir': '_i0/11' },
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', 'sid': '0', 'dir': '_i0/12' },
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'extra': 'https://code.jquery.com/jquery-3.2.1.slim.min.js', 'sid': '0', 'dir': '_i0/13' },
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'extra': 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', 'sid': '0', 'dir': '_i0/14' },
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', 'sid': '0', 'dir': '_i0/15' },
    { 'url': 'http://127.0.0.1:8000/password-reset/done/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', 'sid': '0', 'dir': '_i0/16' },
    { 'url': 'http://127.0.0.1:8000/password-reset/done/', 'extra': 'https://code.jquery.com/jquery-3.2.1.slim.min.js', 'sid': '0', 'dir': '_i0/17' },
    { 'url': 'http://127.0.0.1:8000/password-reset/done/', 'extra': 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', 'sid': '0', 'dir': '_i0/18' },
    { 'url': 'http://127.0.0.1:8000/password-reset/done/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', 'sid': '0', 'dir': '_i0/19' },
    { 'url': 'http://127.0.0.1:8000/register/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', 'sid': '0', 'dir': '_i0/20' },
    { 'url': 'http://127.0.0.1:8000/register/', 'extra': 'https://code.jquery.com/jquery-3.2.1.slim.min.js', 'sid': '0', 'dir': '_i0/21' },
    { 'url': 'http://127.0.0.1:8000/register/', 'extra': 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', 'sid': '0', 'dir': '_i0/22' },
    { 'url': 'http://127.0.0.1:8000/register/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', 'sid': '0', 'dir': '_i0/23' },
    { 'url': 'http://127.0.0.1:8000/login', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', 'sid': '0', 'dir': '_i0/24' },
    { 'url': 'http://127.0.0.1:8000/login', 'extra': 'https://code.jquery.com/jquery-3.2.1.slim.min.js', 'sid': '0', 'dir': '_i0/25' },
    { 'url': 'http://127.0.0.1:8000/login', 'extra': 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', 'sid': '0', 'dir': '_i0/26' },
    { 'url': 'http://127.0.0.1:8000/login', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', 'sid': '0', 'dir': '_i0/27' },
    { 'url': 'http://127.0.0.1:8000/login', 'extra': 'http://dpaste.com/', 'sid': '0', 'dir': '_i0/28' },
    { 'url': 'http://127.0.0.1:8000/login', 'extra': 'http://dpaste.com/', 'sid': '0', 'dir': '_i0/29' },
    { 'url': 'http://127.0.0.1:8000/login', 'extra': 'http://dpaste.com/', 'sid': '0', 'dir': '_i0/30' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'extra': '', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://127.0.0.1:8000/sfi9876.css', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://127.0.0.1:8000/cocoon.yml', 'extra': 'during path-based dictionary probes', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://127.0.0.1:8000/about/sfi9876.css', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://127.0.0.1:8000/about/announcement.yml', 'extra': 'during path-based dictionary probes', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'http://127.0.0.1:8000/admin/sfi9876.css', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/4' },
    { 'url': 'http://127.0.0.1:8000/admin/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/5' },
    { 'url': 'http://127.0.0.1:8000/admin/login/sfi9876/', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/6' },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/7' },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': 'param OGNL', 'sid': '0', 'dir': '_i2/8' },
    { 'url': 'http://127.0.0.1:8000/admin/login/?next=/../../../../../WEB-INF/web.xml', 'extra': 'local file inclusion', 'sid': '0', 'dir': '_i2/9' },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': 'during parameter brute-force tests', 'sid': '0', 'dir': '_i2/10' },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': 'remote file inclusion', 'sid': '0', 'dir': '_i2/11' },
    { 'url': 'http://127.0.0.1:8000/logout/sfi9876.css', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/12' },
    { 'url': 'http://127.0.0.1:8000/logout/?_test1=ccddeeeimmnossstwwxy.:\x5c\x5c\x5c&_test2=acdepsstw//&_test3=bhins//&_test4=CEEFLMORSTeeinnnosttx-*&_test5=cefhilnosu///&_test6=acceiilpprrrssttt1)(&_test7=aaaceijlprrsttv1):(', 'extra': 'IPS check', 'sid': '0', 'dir': '_i2/13' },
    { 'url': 'http://127.0.0.1:8000/password/~sfi9876', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/14' },
    { 'url': 'http://127.0.0.1:8000/password/\x27`uname`\x27', 'extra': 'Shell injection (diff)', 'sid': '0', 'dir': '_i2/15' },
    { 'url': 'http://127.0.0.1:8000/password-reset/sfi9876.css', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/16' },
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/17' },
    { 'url': 'http://127.0.0.1:8000/password-reset/done/sfi9876/', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/18' },
    { 'url': 'http://127.0.0.1:8000/password-reset/done/9-1', 'extra': 'SQL injection', 'sid': '0', 'dir': '_i2/19' },
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'extra': 'dir traversal', 'sid': '0', 'dir': '_i2/20' },
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i2/21' },
    { 'url': 'http://127.0.0.1:8000/register/sfi9876.css', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/22' },
    { 'url': 'http://127.0.0.1:8000/register/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/23' },
    { 'url': 'http://127.0.0.1:8000/register/', 'extra': 'during initial file fetch', 'sid': '0', 'dir': '_i2/24' },
    { 'url': 'http://127.0.0.1:8000/register/', 'extra': 'during initial file fetch', 'sid': '0', 'dir': '_i2/25' },
    { 'url': 'http://127.0.0.1:8000/register/', 'extra': 'param OGNL', 'sid': '0', 'dir': '_i2/26' },
    { 'url': 'http://127.0.0.1:8000/register/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i2/27' },
    { 'url': 'http://127.0.0.1:8000/register/', 'extra': 'during initial file fetch', 'sid': '0', 'dir': '_i2/28' },
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/29' },
    { 'url': 'http://127.0.0.1:8000/static/admin/bogus%0DSkipfish-Inject:bogus', 'extra': 'Header injection', 'sid': '0', 'dir': '_i2/30' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/base.css/sfi9876.yml', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/31' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/base.css/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/32' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/login.css/\x5c.\x5c', 'extra': 'dir traversal', 'sid': '0', 'dir': '_i2/33' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/responsive.css/sfi9876.zip', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/34' },
    { 'url': 'http://127.0.0.1:8000/static/banksite/', 'extra': 'during initial directory fetch', 'sid': '0', 'dir': '_i2/35' },
    { 'url': 'http://127.0.0.1:8000/static/banksite/main.css/sfi9876.xslt', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/36' },
    { 'url': 'http://127.0.0.1:8000/static/banksite/main.css/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/37' },
    { 'url': 'http://127.0.0.1:8000/static/banksite/ing.png', 'extra': 'during initial resource fetch', 'sid': '0', 'dir': '_i2/38' },
    { 'url': 'http://127.0.0.1:8000/static/js/%2B%2Fskipfish-bom', 'extra': 'prologue injection', 'sid': '0', 'dir': '_i2/39' },
    { 'url': 'http://127.0.0.1:8000/static/js/stealer.js/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/40' },
    { 'url': 'http://127.0.0.1:8000/usr/.sf/', 'extra': 'dir traversal', 'sid': '0', 'dir': '_i2/41' },
    { 'url': 'http://127.0.0.1:8000/usr/local/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/42' },
    { 'url': 'http://127.0.0.1:8000/usr/local/lib/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/43' },
    { 'url': 'http://127.0.0.1:8000/usr/local/lib/python3.6/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/44' },
    { 'url': 'http://127.0.0.1:8000/usr/local/lib/python3.6/dist-packages/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/45' },
    { 'url': 'http://127.0.0.1:8000/usr/local/lib/python3.6/dist-packages/django/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/46' },
    { 'url': 'http://127.0.0.1:8000/usr/local/lib/python3.6/dist-packages/django/core/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/47' },
    { 'url': 'http://127.0.0.1:8000/usr/local/lib/python3.6/dist-packages/django/core/handlers/./', 'extra': 'dir traversal', 'sid': '0', 'dir': '_i2/48' },
    { 'url': 'http://127.0.0.1:8000/usr/local/lib/python3.6/dist-packages/django/middleware/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/49' },
    { 'url': 'http://127.0.0.1:8000/usr/local/lib/python3.6/dist-packages/django/utils/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i2/50' },
    { 'url': 'http://127.0.0.1:8000/login/sfi9876', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i2/51' },
    { 'url': 'http://127.0.0.1:8000/login/9-8', 'extra': 'SQL injection', 'sid': '0', 'dir': '_i2/52' },
    { 'url': 'http://127.0.0.1:8000/login', 'extra': 'param behavior', 'sid': '0', 'dir': '_i2/53' },
    { 'url': 'http://127.0.0.1:8000/login/?next=9876sfi', 'extra': 'param behavior', 'sid': '0', 'dir': '_i2/54' },
    { 'url': 'http://127.0.0.1:8000/login', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i2/55' },
    { 'url': 'http://127.0.0.1:8000/login', 'extra': 'param behavior', 'sid': '0', 'dir': '_i2/56' },
    { 'url': 'http://127.0.0.1:8000/summary/', 'extra': 'during node type checks', 'sid': '0', 'dir': '_i2/57' },
    { 'url': 'http://127.0.0.1:8000/summary/8-7', 'extra': 'SQL injection', 'sid': '0', 'dir': '_i2/58' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/admin/', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/', 'extra': '', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/base.css/', 'extra': '', 'sid': '0', 'dir': '_i3/2' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/login.css/', 'extra': '', 'sid': '0', 'dir': '_i3/3' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/responsive.css/', 'extra': '', 'sid': '0', 'dir': '_i3/4' },
    { 'url': 'http://127.0.0.1:8000/static/banksite/main.css/', 'extra': '', 'sid': '0', 'dir': '_i3/5' },
    { 'url': 'http://127.0.0.1:8000/static/js/', 'extra': '', 'sid': '0', 'dir': '_i3/6' },
    { 'url': 'http://127.0.0.1:8000/static/js/stealer.js/', 'extra': '', 'sid': '0', 'dir': '_i3/7' } ]
  },
  { 'severity': 0, 'type': 10802, 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/admin/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://127.0.0.1:8000/static/js/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/2' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://127.0.0.1:8000/register/', 'extra': '', 'sid': '0', 'dir': '_i5/2' },
    { 'url': 'http://127.0.0.1:8000/login', 'extra': '', 'sid': '0', 'dir': '_i5/3' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://127.0.0.1:8000/logout/', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://127.0.0.1:8000/password/', 'extra': '', 'sid': '0', 'dir': '_i6/1' } ]
  },
  { 'severity': 0, 'type': 10403, 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/admin/', 'extra': '', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/', 'extra': '', 'sid': '0', 'dir': '_i7/1' },
    { 'url': 'http://127.0.0.1:8000/static/js/', 'extra': '', 'sid': '0', 'dir': '_i7/2' },
    { 'url': 'http://127.0.0.1:8000/login', 'extra': '', 'sid': '0', 'dir': '_i7/3' },
    { 'url': 'http://127.0.0.1:8000/login', 'extra': '', 'sid': '0', 'dir': '_i7/4' },
    { 'url': 'http://127.0.0.1:8000/login', 'extra': '', 'sid': '0', 'dir': '_i7/5' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://127.0.0.1:8000/login', 'extra': '', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://127.0.0.1:8000/login', 'extra': '', 'sid': '0', 'dir': '_i8/1' },
    { 'url': 'http://127.0.0.1:8000/login', 'extra': '', 'sid': '0', 'dir': '_i8/2' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://127.0.0.1:8000/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i9/0' },
    { 'url': 'http://127.0.0.1:8000/admin/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i9/1' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/base.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i9/2' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/login.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i9/3' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/responsive.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i9/4' },
    { 'url': 'http://127.0.0.1:8000/static/banksite/main.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i9/5' },
    { 'url': 'http://127.0.0.1:8000/static/js/stealer.js/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i9/6' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i10/0' },
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i10/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'WSGIServer/0.2 CPython/3.6.7', 'sid': '0', 'dir': '_i11/0' },
    { 'url': 'http://127.0.0.1:8000/static/banksite/main.css/', 'extra': 'WSGIServer/0.2 CPython/3.6.7', 'sid': '0', 'dir': '_i11/1' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://127.0.0.1:8000/login/', 'extra': 'csrftoken', 'sid': '0', 'dir': '_i12/0' } ]
  }
];

