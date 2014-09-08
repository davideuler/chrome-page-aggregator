just a demo for chrome extension.

公司的日志写在dvbbs里面，每个人一个帖子，每天回复自己的帖子写日报，论坛里面查看dvbbs里面部门的日报不方便。

写了一个chrome插件，用来同时查看多个人的日志。 插件要在 inbbs已经登陆的情况下使用。
插件安装以后，工具栏会多出一个小猫的图标，要看的人员的日志URL列表地址可以在插件的选项中设置。一行一个 URL，每行以逗号分隔。 如:

http://inbbs.17u.com:8080/inbbs/dispbbs.asp?boardID=841&ID=41042&page=1,
http://inbbs.17u.com:8080/inbbs/dispbbs.asp?boardID=841&ID=33679&page=1,
http://inbbs.17u.com:8080/inbbs/dispbbs.asp?boardID=841&ID=41597&page=1

每个URL中的最后两条回复会被抽取出来，在插件中显示内容。
