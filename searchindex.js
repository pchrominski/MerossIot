Search.setIndex({docnames:["advanced-topics","api-reference/controller/device/base","api-reference/controller/device/channel","api-reference/controller/device/generic","api-reference/controller/device/hub","api-reference/controller/mixins/consumption","api-reference/controller/mixins/cover","api-reference/controller/mixins/diffuserlight","api-reference/controller/mixins/diffuserspray","api-reference/controller/mixins/dnd","api-reference/controller/mixins/electricity","api-reference/controller/mixins/hub","api-reference/controller/mixins/light","api-reference/controller/mixins/rollershutter","api-reference/controller/mixins/runtime","api-reference/controller/mixins/spray","api-reference/controller/mixins/system","api-reference/controller/mixins/thermostat","api-reference/controller/mixins/toggle","api-reference/controller/subdevice/sensor","api-reference/controller/subdevice/valve","api-reference/creds","api-reference/http","api-reference/index","api-reference/manager","common-gotchas","index","installation","meross-protocol","quick-start"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["advanced-topics.rst","api-reference/controller/device/base.rst","api-reference/controller/device/channel.rst","api-reference/controller/device/generic.rst","api-reference/controller/device/hub.rst","api-reference/controller/mixins/consumption.rst","api-reference/controller/mixins/cover.rst","api-reference/controller/mixins/diffuserlight.rst","api-reference/controller/mixins/diffuserspray.rst","api-reference/controller/mixins/dnd.rst","api-reference/controller/mixins/electricity.rst","api-reference/controller/mixins/hub.rst","api-reference/controller/mixins/light.rst","api-reference/controller/mixins/rollershutter.rst","api-reference/controller/mixins/runtime.rst","api-reference/controller/mixins/spray.rst","api-reference/controller/mixins/system.rst","api-reference/controller/mixins/thermostat.rst","api-reference/controller/mixins/toggle.rst","api-reference/controller/subdevice/sensor.rst","api-reference/controller/subdevice/valve.rst","api-reference/creds.rst","api-reference/http.rst","api-reference/index.rst","api-reference/manager.rst","common-gotchas.rst","index.rst","installation.rst","meross-protocol.rst","quick-start.rst"],objects:{"meross_iot.controller.device":{BaseDevice:[1,0,1,""],ChannelInfo:[2,0,1,""],GenericSubDevice:[3,0,1,""],HubDevice:[4,0,1,""]},"meross_iot.controller.device.BaseDevice":{async_update:[1,1,1,""],channels:[1,1,1,""],default_command_timeout:[1,1,1,""],firmware_version:[1,1,1,""],hardware_version:[1,1,1,""],internal_id:[1,1,1,""],lookup_channel:[1,1,1,""],name:[1,1,1,""],online_status:[1,1,1,""],register_push_notification_handler_coroutine:[1,1,1,""],type:[1,1,1,""],unregister_push_notification_handler_coroutine:[1,1,1,""],uuid:[1,1,1,""]},"meross_iot.controller.device.GenericSubDevice":{async_get_battery_life:[3,1,1,""],async_update:[3,1,1,""],internal_id:[3,1,1,""],online_status:[3,1,1,""]},"meross_iot.controller.mixins.consumption":{ConsumptionXMixin:[5,0,1,""]},"meross_iot.controller.mixins.consumption.ConsumptionXMixin":{async_get_daily_power_consumption:[5,1,1,""]},"meross_iot.controller.mixins.diffuser_light":{DiffuserLightMixin:[7,0,1,""]},"meross_iot.controller.mixins.diffuser_light.DiffuserLightMixin":{async_set_light_mode:[7,1,1,""],get_light_brightness:[7,1,1,""],get_light_is_on:[7,1,1,""],get_light_mode:[7,1,1,""],get_light_rgb_color:[7,1,1,""]},"meross_iot.controller.mixins.diffuser_spray":{DiffuserSprayMixin:[8,0,1,""]},"meross_iot.controller.mixins.diffuser_spray.DiffuserSprayMixin":{async_set_spray_mode:[8,1,1,""],get_current_spray_mode:[8,1,1,""]},"meross_iot.controller.mixins.dnd":{SystemDndMixin:[9,0,1,""]},"meross_iot.controller.mixins.dnd.SystemDndMixin":{async_get_dnd_mode:[9,1,1,""],set_dnd_mode:[9,1,1,""]},"meross_iot.controller.mixins.electricity":{ElectricityMixin:[10,0,1,""]},"meross_iot.controller.mixins.electricity.ElectricityMixin":{async_get_instant_metrics:[10,1,1,""],get_last_sample:[10,1,1,""]},"meross_iot.controller.mixins.garage":{GarageOpenerMixin:[6,0,1,""]},"meross_iot.controller.mixins.garage.GarageOpenerMixin":{async_close:[6,1,1,""],async_open:[6,1,1,""],get_is_open:[6,1,1,""]},"meross_iot.controller.mixins.hub":{HubMixn:[11,0,1,""],HubMts100Mixin:[11,0,1,""]},"meross_iot.controller.mixins.light":{LightMixin:[12,0,1,""]},"meross_iot.controller.mixins.light.LightMixin":{async_set_light_color:[12,1,1,""],get_color_temperature:[12,1,1,""],get_light_is_on:[12,1,1,""],get_luminance:[12,1,1,""],get_rgb_color:[12,1,1,""],get_supports_luminance:[12,1,1,""],get_supports_rgb:[12,1,1,""],get_supports_temperature:[12,1,1,""]},"meross_iot.controller.mixins.roller_shutter":{RollerShutterTimerMixin:[13,0,1,""]},"meross_iot.controller.mixins.roller_shutter.RollerShutterTimerMixin":{async_close:[13,1,1,""],async_open:[13,1,1,""],async_set_config:[13,1,1,""],async_stop:[13,1,1,""],get_position:[13,1,1,""],get_status:[13,1,1,""]},"meross_iot.controller.mixins.runtime":{SystemRuntimeMixin:[14,0,1,""]},"meross_iot.controller.mixins.runtime.SystemRuntimeMixin":{async_update_runtime_info:[14,1,1,""],cached_system_runtime_info:[14,1,1,""]},"meross_iot.controller.mixins.spray":{SprayMixin:[15,0,1,""]},"meross_iot.controller.mixins.system":{SystemAllMixin:[16,0,1,""],SystemOnlineMixin:[16,0,1,""]},"meross_iot.controller.mixins.thermostat":{ThermostatModeMixin:[17,0,1,""],ThermostatState:[17,0,1,""]},"meross_iot.controller.mixins.thermostat.ThermostatModeMixin":{get_thermostat_state:[17,1,1,""]},"meross_iot.controller.mixins.thermostat.ThermostatState":{cool_temperature_celsius:[17,1,1,""],current_temperature_celsius:[17,1,1,""],eco_temperature_celsius:[17,1,1,""],heat_temperature_celsius:[17,1,1,""],is_on:[17,1,1,""],manual_temperature_celsius:[17,1,1,""],max_temperature_celsius:[17,1,1,""],min_temperature_celsius:[17,1,1,""],mode:[17,1,1,""],target_temperature_celsius:[17,1,1,""],update:[17,1,1,""],warning:[17,1,1,""]},"meross_iot.controller.mixins.toggle":{ToggleMixin:[18,0,1,""],ToggleXMixin:[18,0,1,""]},"meross_iot.controller.mixins.toggle.ToggleXMixin":{async_toggle:[18,1,1,""],async_turn_off:[18,1,1,""],async_turn_on:[18,1,1,""],is_on:[18,1,1,""]},"meross_iot.http_api":{MerossHttpClient:[22,0,1,""]},"meross_iot.http_api.MerossHttpClient":{async_from_user_password:[22,1,1,""],async_invalidate_credentials:[22,1,1,""],async_list_devices:[22,1,1,""],async_list_hub_subdevices:[22,1,1,""],async_login:[22,1,1,""],async_logout:[22,1,1,""],cloud_credentials:[22,1,1,""]},"meross_iot.manager":{MerossManager:[24,0,1,""],MqttConnectionStatus:[24,0,1,""],TransportMode:[24,0,1,""]},"meross_iot.manager.MerossManager":{async_device_discovery:[24,1,1,""],async_execute_cmd:[24,1,1,""],async_init:[24,1,1,""],dump_device_registry:[24,1,1,""],find_devices:[29,1,1,""],load_devices_from_dump:[24,1,1,""],register_push_notification_handler_coroutine:[24,1,1,""],unregister_push_notification_handler_coroutine:[24,1,1,""]},"meross_iot.model":{credentials:[21,2,0,"-"]},"meross_iot.model.credentials":{MerossCloudCreds:[21,0,1,""]},"meross_iot.model.credentials.MerossCloudCreds":{from_json:[21,1,1,""],to_json:[21,1,1,""]},meross_iot:{http_api:[22,2,0,"-"],manager:[24,2,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","module","Python module"]},objtypes:{"0":"py:class","1":"py:method","2":"py:module"},terms:{"0d70":22,"3rd":26,"48f2":22,"8bit":[7,12],"case":[0,22,24,25,26,28,29],"catch":0,"class":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,21,22,24,25,29],"default":[1,6,7,10,12,13,18,28],"enum":[1,7,8,9,13,24,29],"export":0,"float":[3,5,7,8,9,10,12,13,14,18,24],"function":[0,1,24,29],"import":[0,26,28,29],"int":[1,2,6,7,8,12,13,17,24],"long":0,"new":[0,25,28,29],"return":[1,3,5,6,7,8,9,10,12,13,14,17,18,21,22,24,29],"switch":[1,18,26],"true":[6,7,12,18,24],"try":[1,28],"while":25,AND:[24,29],AWS:28,DNS:28,For:[0,24,25,26,29],Its:1,NOT:9,Such:29,TLS:28,That:[0,29],The:[0,6,10,13,17,24,25,26,28,29],Then:29,There:[25,28],Use:24,__main__:29,__meross_cr:22,__name__:29,__onoff:12,_md5:28,aad5:22,abl:[28,29],about:[25,26,28,29],abov:[27,28],absolv:29,abstracteventloop:24,abus:25,access:[25,28,29],account:[0,22,25,26,28,29],accur:10,accuraci:28,acquir:25,across:22,actual:[9,25],actuat:29,add:[0,14,25],added:0,address:[25,28],advanc:26,advis:0,after:[25,29],again:[0,25,29],against:[1,22,25,28],agent:22,aim:28,albertogeniola:27,alert:29,align:25,all:[0,24,28,29],allow:[0,1,28,29],alongsid:29,alreadi:24,also:[0,24,28,29],altern:0,alwai:[0,25],ambient:[9,17,29],among:28,android:28,ani:[0,1,10,22,24,25,26,28,29],anoth:28,answer:24,anyth:28,api:[22,24,25,26,28,29],api_base_url:22,app:[0,22,24,25,26,29],app_id:28,app_typ:22,app_vers:22,appli:1,applianc:28,applic:28,approach:[0,25,26],appropri:1,architectur:26,archiv:27,arg:[0,1,3,5,6,7,8,9,10,12,13,14,17,18,22,24],argument:[1,24,29],aris:0,around:29,ask:[22,25,28],assign:[1,24,29],associ:22,assum:28,async:[0,1,3,5,6,7,8,9,10,12,13,14,18,22,24,26,29],async_clos:[6,13],async_device_discoveri:[0,24,29],async_execute_cmd:24,async_from_user_password:[22,29],async_get_battery_lif:3,async_get_daily_power_consumpt:5,async_get_dnd_mod:9,async_get_instant_metr:[10,29],async_get_temperatur:29,async_init:[0,24,29],async_invalidate_credenti:22,async_list_devic:22,async_list_hub_subdevic:22,async_login:22,async_logout:[22,29],async_open:[6,13],async_set_config:13,async_set_light_color:[12,29],async_set_light_mod:7,async_set_spray_mod:8,async_set_target_temperatur:29,async_stop:13,async_toggl:18,async_turn_off:[18,29],async_turn_on:[18,29],async_upd:[1,3,25,29],async_update_runtime_info:14,asynchron:25,asyncio:[0,24,25,26,29],attack:28,attempt:28,attribut:[3,10],author:[28,29],auto:17,auto_reconnect:24,autom:[25,26],automat:[0,1,25],avail:[9,28,29],avoid:[0,9,10,25,29],await:[0,1,24,25,29],awar:25,backend:26,backward:24,ban:[25,26,29],bandwidth:1,base64:28,base64_encoded_password:28,base64_encoded_ssid:28,base:[22,24,29],basedevic:[0,23,24,26],basic:[0,1,3,26,28,29],batteri:3,batteryinfo:3,becom:[24,25],been:[0,1,24,28,29],befor:[0,24,25,28,29],belong:22,between:[26,28,29],bind:28,bit:[0,26,29],block:[25,26],blue:[7,12],bodi:28,bool:[2,6,7,12,18,24],both:29,bought:26,bright:[7,12],broadcast:28,broker:[9,24,25,26,28],build:[21,22,26,28],built:26,bulb:[7,12,18,26],button:[28,29],byt:[24,29],ca_cert:24,cach:[9,10,14,26,29],cached_http_device_list:24,cached_system_runtime_info:14,calcul:[10,28],call:[0,10,24,25,29],callabl:[1,24],can:[0,1,12,24,25,27,28,29],capabl:[12,24,29],carefulli:29,carri:28,caus:25,caution:24,cautiou:22,certif:28,chang:[0,1,8,14,24,25,26,29],channel:[1,5,6,7,8,10,12,13,17,18,29],channel_id_or_nam:1,channel_typ:2,channelinfo:[23,26],character:1,charg:29,che:28,check:[28,29],choos:29,chose:29,chosen:29,classmethod:[21,22],client:[23,24,26,29],clientid:28,clone:27,close:[6,13,25,29],close_timer_second:13,cloud:[0,1,21,25,28],cloud_credenti:22,code:[0,27,29],collect:0,color:[12,29],color_temperatur:12,com:[22,27],combin:[10,22],command:[0,1,6,7,8,12,13,24,25,26,27,29],common:[26,28],commun:28,compat:24,complet:[25,29],compli:0,compos:[1,3],concaten:28,config:28,configur:[7,12,13,28,29],connect:[25,28,29],consent:28,consid:[14,24,26,29],constant:28,consumpt:[5,10,29],consumptionxmixin:[23,26,29],contact:25,contain:[0,7,12,14,22,24,29],content:28,continu:0,contrari:29,control:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,24,26],cool:17,cool_temperature_celsiu:17,copi:28,core:29,coro:[1,24],coro_nam:0,coroutin:[0,1,24],correctli:28,could:[14,25,26],counter:22,creat:[0,29],cred:22,credenti:[0,21,22,28],creds_env_var_nam:22,current:[0,1,3,6,7,8,10,12,13,17,21,24,25,29],current_color:29,current_temperature_celsiu:17,d42750b43da6:22,danger:29,data:[1,5,10,17,22,24,26,29],date:24,datetim:21,deal:[22,24,29],deamon:0,debug:0,decid:0,dedic:0,def:[0,29],default_command_timeout:1,defin:[1,7],definit:0,deliv:[1,25],demo:29,deprec:24,deriv:[24,29],describ:10,design:0,destination_device_uuid:24,detail:29,dev:29,develop:[0,1,25,26,28,29],devic:[1,2,3,4,5,7,8,9,10,12,14,17,18,22,24,25,26],device_class:[24,29],device_internal_id:[0,1],device_nam:[24,29],device_typ:[24,29],device_uuid:[1,4,5,6,7,8,10,11,12,13,14,15,16,17,18,24,28,29],deviceuuid:28,devid:0,dhcp:28,dict:[0,1,5,14,17,24],dictionari:17,did:26,differ:[25,28,29],diffuser_light:7,diffuser_sprai:8,diffuserlightmixin:[23,26],diffuserlightmod:7,diffuserspraymixin:[23,26],diffuserspraymod:8,digest:28,digit:28,directori:0,dirti:29,disconnect:25,discov:[0,24,25,29],discoveri:[0,24],discrimin:28,disturb:9,dnd:9,dndmixin:[23,26],dndmode:9,document:[25,29],doe:[0,25,26,28,29],doing:29,domest:28,domot:26,don:0,done:[0,22],door:[6,26],down:29,download:27,due:1,dump:[0,24],dump_device_registri:[0,24],each:[7,12,25],easi:0,ec6c32141a2d374752bd4cb651c7f7137e9ce1:22,eco:17,eco_temperature_celsiu:17,edg:25,effort:29,either:29,electr:[10,29],electricitymixin:[23,26,29],els:[25,29],email:[22,25,29],embed:1,empti:29,enabl:[9,12,17],end:25,endpoint:[22,25,29],engin:28,enough:[10,28],ensur:29,enter:0,entir:29,enumer:[24,25],env:22,environ:29,equip:29,error:25,even:[0,26,28,29],event:[0,1,24,25,28],everi:[1,25,28],evt_coro:0,exact:[0,29],exampl:[0,29],exchang:0,execut:[0,1,28],expect:28,experienc:25,expir:22,explain:0,explicit:28,explicitli:[24,26,28],expos:[0,1,29],fact:[26,29],failur:0,fals:[2,6,7,12,18,24],fast:29,featur:[0,24,26],fetch:[7,8,24,25],field:[24,29],file:[0,24],filenam:24,filter:[24,28,29],find:29,find_devic:[24,29],firmwar:[1,28],firmware_vers:1,first:[25,26,28,29],flaw:28,flood:10,flow:26,fmware:28,folder:0,follow:[0,27,28,29],forbidden:28,forc:[1,29],form:28,forward:29,found:29,framework:26,frequent:29,fresh:14,from:[0,5,7,8,10,12,17,21,24,25,27,28,29],from_devic:28,from_json:21,full:[1,3,22,24],further:26,futur:14,garag:[6,26],garageopenermixin:[23,26,29],gatewai:28,gather:[0,10,14],gener:[0,1,7,12,22,24,28,29],genericpushnotif:24,genericsubdevic:[23,26],get:[1,3,12,24,29],get_color_temperatur:12,get_current_spray_mod:8,get_dnd_mod:9,get_event_loop:29,get_is_open:[6,29],get_last_sampl:10,get_light_bright:7,get_light_is_on:[7,12],get_light_mod:7,get_light_rgb_color:7,get_lumin:12,get_posit:13,get_rgb_color:[12,29],get_statu:13,get_supports_lumin:12,get_supports_rgb:[12,29],get_supports_temperatur:12,get_thermostat_st:17,getlogg:0,git:27,github:[0,27],given:[0,6,12,13,21,22],goe:29,going:26,gotcha:[26,29],green:[7,12],guarante:28,hand:29,handl:[8,25,26,29],handler:[0,1,24],happen:[25,28],hard:26,hardwar:[1,26,28],hardware_vers:1,has:[0,25,28,29],have:[0,1,7,12,24,26,27,28,29],header:[22,28],heat:[17,29],heat_temperature_celsiu:17,here:29,hex:28,him:25,histor:5,hit:25,hoc:0,hold:[0,21,28],host:28,hostnam:[24,28],hour:[25,28],how:[25,26,29],howev:[0,25,28,29],http:[23,24,25,26,27,28,29],http_api:[0,22,24,29],http_api_cli:[0,29],http_client:[0,24,29],http_proxi:22,httpdeviceinfo:[22,24],httpstatscount:22,httpsubdeviceinfo:22,hub:[3,11,22,24,29],hub_id:22,hubdevic:[23,24,26,29],hubdevice_uuid:3,hubmixn:[23,26],hubmts100mixin:[23,26],humid:29,identifi:[1,3,22,24,28,29],ids:[24,29],ignor:[12,24],imag:28,immedi:29,immin:25,immut:24,implement:[0,18,24,25,29],inconsist:25,index:[1,2,7,18,26],indic:22,info:[0,7,8,10,12,14,24,29],inform:[1,10,14,24,26,28,29],init:0,initi:24,input:[0,28],inspect:26,instal:26,instanc:[0,21,22,24,25],instant:10,instant_consumpt:29,instead:[10,14,22,29],instruct:28,integ:[7,12],intens:12,intercept:0,interest:[0,18],interfac:29,intern:[1,3,17],internal_id:[1,3,24,29],internet:25,interv:24,introduc:26,invalid:22,invok:[0,1,22,24,25,29],iot:[22,27],is_heat:29,is_master_channel:2,is_on:[17,18,29],isoformat:29,issu:[0,9,22,24,27,29],issued_on:21,iter:[24,29],its:[0,3,9,24,28],itself:28,json:[21,28],json_str:21,keep:[0,22,25,29],kei:[21,28],keyword:25,kind:28,know:[26,29],known:24,kwarg:[0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,22],kword:24,last_sampled_humid:29,last_sampled_temperatur:29,last_sampled_tim:29,later:24,latest:[14,24,27,29],lead:26,least:[12,24,29],led:[7,9],left:24,len:29,let:[26,29],level:0,leverag:26,librari:[0,1,3,25,27,28,29],light:[7,12,24,29],lightmixin:[23,24,26,29],like:[0,29],limit:[0,1,25,26],line:25,list:[1,5,22,24,26],listen:[0,25],liter:28,load:[0,24],load_devices_from_dump:[0,24],local:[24,28],log:[22,25,26,28],log_identifi:22,logic:[24,29],login:[22,28],logout:[22,25,29],longer:0,look:[1,26,29],lookup_channel:1,loop:[24,25,29],loos:25,lost:25,low:0,lower:28,lowercas:28,lumin:[12,29],mac:28,macaddress:28,machin:25,magnet:29,mai:[0,10,25,28],main:29,make:[0,22,25,27,28],malici:28,manag:[0,1,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,24,29],manger:24,mani:[22,25,28],manual:[27,29],manual_temperature_celsiu:17,mark:29,market:0,master:1,match:[0,24,28,29],matter:0,max:[13,29],max_supported_temperatur:29,max_temperature_celsiu:17,maximum:[17,24],md5:28,meant:26,measur:10,meross:[0,1,3,14,21,22,24,25,26,27,29],meross_:28,meross_devic:29,meross_device_uuid:24,meross_email:29,meross_iot:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,21,22,24,29],meross_password:29,meross_root_logg:0,meross_sniff:0,merosscloudcr:[21,22],merosscloudcredenti:[22,23,26],merosshttpcli:[0,22,24,25,29],merossiot:[0,22,24,27,29],merossmanag:[0,23,25,26,29],merosssnif:0,messag:[0,9,25,28],message_id:28,messageid:28,method:[0,1,9,10,14,22,24,25,28,29],metric:10,might:[0,1,14,22,24,25,26,29],min:[13,29],min_supported_temperatur:29,min_temperature_celsiu:17,mind:26,minimum:17,mixin:[5,6,7,8,9,10,11,12,13,14,15,16,17,18,24,29],mode:[7,8,9,12,17,24,28,29],model:[1,3,7,8,9,10,13,21,22,24,29],modifi:0,modul:[0,26],moment:25,monitor:29,more:[0,22,24,28,29],most:[0,1,25,26,28,29],motor:29,mount:29,mqtt:[1,9,24,25,26,29],mqtt_host:28,mqtt_hostnam:24,mqtt_override_serv:24,mqtt_port:[24,28],mqtt_skip_cert_valid:24,mqttconnectionstatu:24,ms100:29,ms100sensor:[23,24,26,29],msl120:[12,24,29],mss210:28,mss310:[24,29],mts100v3:29,mts100v3valv:[23,24,26,29],multi:1,multipl:[24,29],must:[0,1,12,24,25,28],name:[0,1,2,24,28,29],namespac:[0,1,24,28],nativ:[22,24,29],necessari:0,need:[0,1,6,9,13,25,29],neighborhood:28,network:[0,1,26,28],new_temp:29,none:[1,2,3,5,6,7,8,9,10,12,13,14,17,18,22,24,29],note:[10,12,14,24,26,28,29],notic:25,notif:[1,24,25,26],notifi:24,notificaiton:0,now:[26,28],number:[0,25,29],numer:28,object:[1,10,14,21,22,24,25],obtain:[22,28],occur:[0,25],off:[7,9,12,18,29],offer:[10,29],offici:26,offlin:24,often:10,omissi:0,omit:28,on_off:29,onc:[0,28,29],one:[0,7,12,24,28,29],ones:[25,29],onli:[1,7,12,24,27,28,29],onlin:[0,1,3,24,29],online_statu:[1,3,24,29],onlinestatu:[24,29],onoff:[7,12],open:[6,13,26,28],open_statu:29,open_timer_second:13,oper:[1,6,7,8,12,13,18,29],operations__:12,option:[2,3,5,6,7,8,9,10,12,13,14,17,18,22,24,29],order:[0,24,25,28,29],origin:0,other:[1,24,25,28,29],otherwis:[6,7,12],out:24,outcom:28,over:[0,1,24],overrid:[1,24],override_transport_mod:24,own:29,page:26,pair:26,panoram:29,param:[1,6,7,8,9,13,17,21,22,24],paramet:[1,5,6,7,10,12,13,17,18,22,24,28,29],parti:26,particular:[0,24],pass:[0,17,24],password:[0,22,28,29],path:28,pattern:[25,26],payload:[24,28],peopl:26,perfom:3,perform:[0,22,24,25,26,28],phase:28,physic:28,piec:26,pip:27,pipi:27,place:26,plai:[0,29],plan:26,pleas:[10,12,26],plu:[1,3],plug:[28,29],plug_ip_address:28,plugin:[3,10,26],point:28,poll:[3,9,10,14],port:[24,28],portion:28,posit:13,possibl:[0,22,28],post:28,power:[5,10,29],powerinfo:10,preced:[1,25],prefix:[1,3,28],press:[0,28,29],pretti:0,prevent:[0,25],previous:[1,10,21,24,25],print:[0,29],proactoreventloop:25,probabl:26,product:26,program:[0,1,26],proper:29,properli:25,properti:[1,3,14,17,22,29],protocol:26,provid:[14,22,24,26,28,29],proxi:22,proxim:29,publish:28,pull:28,push:[1,24,25,26],put:28,python:[0,25,26,27],queri:29,quick:26,quickli:29,quit:29,rais:0,randint:29,random:29,randomli:29,rate:[25,26],rather:[10,29],raw:17,reach:25,react:[0,1],read:[5,10,26],readonli:29,realli:29,reason:[0,25,26,29],reboot:28,receiv:[0,1,24,25,28],recent:[10,29],recipi:29,recogn:28,red:[7,12],reduc:0,refer:[10,26,29],refresh:[9,10],refus:22,regist:[0,1,5,24,29],register_push_notification_handler_coroutin:[0,1,24],registri:[24,26],rel:[24,29],relat:25,releas:[0,25],reli:[0,9,10,26,29],reload:[0,24],remov:[0,14,25],report:[0,24,28,29],repres:[1,28],represent:1,republish:28,request:[22,25,28],requir:27,respect:29,respons:[0,22,28,29],restor:25,restrict:24,result:[24,25,29],resum:28,retriev:[9,24,28,29],revers:28,revis:1,rgb:[7,12,29],right:26,risk:29,roller:13,roller_shutt:13,rollershuttermixin:[23,26],rollershutterst:13,rollershuttertimermixin:13,rout:28,run:[0,1,25],run_until_complet:29,runtim:14,runtimeerror:25,runtimemixin:[23,26],safe:29,same:[0,22],sampl:29,sample_timestamp:10,satisfi:[24,29],save:24,scan:28,script:[0,25,29],search:[26,29],second:[24,28],secret:28,section:[25,28,29],secur:[25,28],see:29,seem:28,select:0,send:[0,6,13,24,25,28,29],sens:[10,29],sensit:[0,24,29],sensor:[24,26],sent:[24,28],separ:28,sequenc:28,serial:21,seriou:28,serv:28,server:28,session:22,set:[7,8,9,13,22,24,28,29],set_dnd_mod:9,set_event_loop_polici:[25,29],setlevel:0,settabl:17,setup:[25,29],sever:0,should:[0,1,9,10,22,24,25,26,28,29],show:29,shown:0,shutter:13,sign:28,signal:29,signatur:[0,1,24,28,29],similarli:[0,24,29],simpl:28,simpli:28,simplifi:22,simul:29,sinc:28,situat:25,skip:24,sleep:29,smart:[0,18,29],snif:[0,28],sniff:26,sniffer:0,snippet:[0,29],solv:25,some:[1,3,25,26,29],somehow:29,someon:[25,29],someth:0,sometim:0,soon:[26,29],sourc:27,specif:[0,1,22,28,29],specifi:[12,18,22,24,29],spoof:28,sprai:[8,15],spraymixin:[23,26],ssid:28,ssl:28,standard:0,start:[0,25,26,28],stat:[18,22],state:[1,7,12,17,18,25,28,29],stats_count:22,statu:[0,1,3,6,13,18,24,25,29],step:28,stick:0,still:28,stop:[0,13],store:[22,24],str1:28,str2:28,str:[0,1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,21,22,24,29],straight:29,strategi:25,strictli:[1,9],string:[21,24,28,29],strongli:0,structur:24,stuff:26,sub:22,subdevic:[22,24,29],subdevice_id:3,subscrib:28,succe:28,success:28,suffix:[1,3],suitabl:26,support:[0,12,18,24,29],sure:[0,22,25,27],suspend:25,suspens:25,system:[16,23,26],systemallmixin:[23,26],systemdndmixin:9,systemonlinemixin:[23,26],systemruntimemixin:14,take:[0,1,26],taken:29,target:[17,29],target_device_uuid:28,target_temperatur:29,target_temperature_celsiu:17,task:26,team:25,tell:[12,24,28,29],temp:29,temperatur:[12,17,29],test:0,than:[10,29],thei:[0,29],them:29,themselv:29,thermostat:[17,26],thermostatmixin:[23,26],thermostatmodemixin:17,thermostatst:17,thi:[0,1,3,5,7,8,9,10,12,14,18,22,24,25,27,28,29],thing:[26,29],those:29,though:0,three:[7,12],time:[0,14,22,24,25,26,28,29],timeout:[1,3,5,7,8,9,10,12,13,14,18,24],timer:13,timestamp:28,to_json:21,todo:0,toggl:[12,18,24,29],togglemixin:[23,26,29],togglex:[12,18,24,29],togglexmixin:[23,24,26,29],togglexmixn:29,token:[21,22,25],too:[22,25,26,29],tool:0,top:25,topic:[26,28],track:[0,29],traffic:[26,28],transport:24,transportmod:24,treat:28,tri:28,trigger:29,triggersrc:28,tropic:28,tupl:[7,12,24],ture:29,turn:[9,12,18,29],two:28,txt:27,type:[1,22,24,28,29],ua_head:22,unavail:1,uncom:29,underscor:28,understand:26,unfortun:29,union:[1,21,24,29],uniqu:28,unknown:[1,24,28],unoffici:26,unregist:[0,1,24],unregister_push_notification_handler_coroutin:[0,1,24],unsupport:26,untrust:28,unvalid:24,unzip:27,updat:[1,3,17,24,25,28,29],update_runtime_info:14,update_subdevice_statu:24,upgrad:27,upload:0,upon:1,url:22,usag:[0,22],use:[0,22,25,26,28,29],used:[1,3,12,22,24,25,26,28,29],useful:0,user:[0,1,21,22,24,25,28,29],user_email:21,user_id:[21,28],userid:28,usernam:[22,28],uses:[24,28],using:[0,9,14,22,25,28],usual:[1,12,25],util:[0,21,22],uuid:[1,22,24,28,29],valid:28,valu:[7,10,12,14,28,29],valv:[24,29],vari:[12,14],variabl:22,verbos:0,veri:29,version:[1,22],via:[0,1,9,12,24,28,29],voltag:[10,29],wai:[0,25,26],wait:[0,24,29],want:[0,14,24,26,27],warn:[0,17,25],warranti:26,well:[26,29],when:[0,1,7,9,12,17,18,22,24,25,29],whenev:[1,24],where:[0,10,12,28],whether:17,which:[0,6,13,22,24,25,26,28,29],whole:[24,29],why:29,wifi:28,window:25,windowsselectoreventlooppolici:[25,29],within:29,without:[22,24,25,28],won:28,word:28,work:[25,26,27,29],would:[24,29],write:[25,28,29],wrong:25,yet:0,you:[0,1,9,10,14,22,24,25,26,27,29],your:[0,1,25,29],your_meross_cloud_email:29,your_meross_cloud_password:29,zip:0},titles:["Advanced topics","BaseDevice","ChannelInfo","GenericSubDevice","HubDevice","ConsumptionXMixin","GarageOpenerMixin","DiffuserLightMixin","DiffuserSprayMixin","DNDMixin","ElectricityMixin","HubMixn","LightMixin","RollerShutterMixin","System`RuntimeMixin","SprayMixin","SystemAllMixin","ThermostatMixin","ToggleXMixin","Ms100Sensor","Mts100v3Valve","MerossCloudCredentials","HTTP Client","API Reference","MerossManager","Common gotchas","Welcome to MerossIot Library\u2019s documentation!","Installation","Meross Protocol Inspection","Quick start"],titleterms:{"switch":29,advanc:0,api:23,app:28,architectur:28,basedevic:1,befor:26,bulb:29,cach:0,channelinfo:2,client:[22,28],command:28,common:25,consumptionxmixin:5,content:26,control:29,data:0,devic:[0,28,29],diffuserlightmixin:7,diffuserspraymixin:8,dndmixin:9,document:26,door:29,electricitymixin:10,flow:28,garag:29,garageopenermixin:6,genericsubdevic:3,gotcha:25,handl:0,http:22,hubdevic:4,hubmixn:11,hubmts100mixin:11,indic:26,inform:0,inspect:28,instal:27,librari:26,lightmixin:12,list:29,log:0,meross:28,merosscloudcredenti:21,merossiot:26,merossmanag:24,mqtt:28,ms100sensor:19,mts100v3valv:20,notif:[0,28],open:29,pair:28,protocol:28,push:[0,28],quick:29,read:29,refer:23,registri:0,rollershuttermixin:13,runtimemixin:14,sensor:29,sniff:0,spraymixin:15,start:29,system:14,systemallmixin:16,systemonlinemixin:16,tabl:26,thermostat:29,thermostatmixin:17,thi:26,togglemixin:18,togglexmixin:18,topic:0,using:26,welcom:26}})