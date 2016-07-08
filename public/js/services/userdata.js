define([
	'angular'
], function (angular) {
	var moduleName = 'UsersModule';
	angular
		.module(moduleName, [])
		.factory('userdata', function ($http, $log) {
			
            var getUrl = 'http://test.alquimedia.co/rest/user';

			return {
				getAll: function (successcb) {
                    
                    $http({ method : 'GET', url: getUrl }).
                        success(function (data, status, headers, config) {
                            console.log(data);
                            successcb(data || '[]');
                        }).
                        error(function (data, status, headers, config) {
                            console.log(status);
                            $log.warn(data, status, headers, config);
                        });
                     /* 
					return JSON.parse('[{"user_id":1,"email":"prueba@alquemedia.com","uuid":"27008d46-5dd1-f7b6-97a3-3b5ce1357bc1","last_modified_date":"2016-06-30 13:10:03","last_modified_by":1,"first_name":"prueba","last_name":"prueba","avatar":"http:\/\/thesocietypages.org\/socimages\/files\/2009\/05\/hotmail.png","created_date":"2016-06-30 13:10:01.935313","last_login_date":"2016-06-30 13:10:01","num_logins":0,"ckey":"p5c19od","ctime":1467306601,"telephone":123456789,"full_name":"prueba prueba"},{"user_id":2,"email":"prueba2@alquemedia.com","uuid":"de50b017-91fb-396b-eee0-5b0145549e7b","last_modified_date":"2016-06-30 13:10:20","last_modified_by":2,"first_name":"prueba2","last_name":"prueba2","avatar":"http:\/\/thesocietypages.org\/socimages\/files\/2009\/05\/hotmail.png","created_date":"2016-06-30 13:10:18.989912","last_login_date":"2016-06-30 13:10:19","num_logins":0,"ckey":"k2043oy","ctime":1467306619,"telephone":123456789,"full_name":"prueba2 prueba2"},{"user_id":4,"email":"prueba3@alquemedia.com","uuid":"86270e11-ee60-1524-3f9b-2a9aa7c01b5c","last_modified_date":"2016-06-30 13:12:04","last_modified_by":4,"first_name":"prueba3","last_name":"prueba3","avatar":"http:\/\/thesocietypages.org\/socimages\/files\/2009\/05\/hotmail.png","created_date":"2016-06-30 13:12:04.041936","last_login_date":"2016-06-30 13:12:04","num_logins":0,"ckey":"2b96t7y","ctime":1467306724,"telephone":123456789,"full_name":"prueba3 prueba3"}]' || '[]');*/
				},

				put: function (todos) {
					localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
				}
			};
		});
	return moduleName;
});
