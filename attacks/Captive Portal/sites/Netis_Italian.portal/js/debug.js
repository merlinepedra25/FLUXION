var initDebug = function(){
	var debug_panel = new Element('DIV:df_debug_panel');	
	debug_panel.entity.style.left = '0px';
	debug_panel.entity.style.top = '0px';
	//debug title
	var title = new Element('DIV:df_debug_title');
	title.html('Netcore Debug');
	title.entity.onmousedown = function(e){$.Drag($.Debug.entity,e);};
	title.entity.onmouseup = function(){document.onmousemove = function(){return false;};};
	title.entity.ondblclick = function(){
		var con = $.Debug.context.entity;
		if(con.style.display == 'block'){
			con.style.display = 'none';		
		}else{
			con.style.display = 'block';		
		}
	}
	//browser_version
	var browser_version = new Element('DIV:df_debug_v_num');
	browser_version.html('<strong>'+$.BrowserVersion+'</strong>'+' : '+navigator.userAgent);
	var error = new Element('DIV:df_debug_err');
	var dl = new Element('DL');	
	var dt = new Element('DT');
	dt.html('<strong>debug error:</strong>');
	var dd = new Element('dd');
	dl.push(dt,dd);
	error.push(dl);
	error.dt = dt;
	error.dd = dd;
	//debug control
	var control = new Element('DIV:df_debug_control');
	//debug context
	var context = new Element('DIV:df_debug_context');
	context.entity.style.display = 'block';
	var tab_h_map = ['Module','Application','Panel','Tag'];
	var info_tab = new Element('TABLE:df_debug_tab');
	info_tab.entity.setAttribute('cellspacing',0);
	info_tab.entity.setAttribute('cellpadding',0);
	var head = new Element('THEAD'); 
	var row = new Element('TR');
	for(var i=0;i<tab_h_map.length;i++){
		var c = new Element('TD');	
		c.entity.style.width = (i<2)?'15%':'35%';
		c.html(tab_h_map[i]);
		row.append(c);
	}
	head.append(row);
	var body = new Element('TBODY');
	var row = new Element('TR');
	for(var i=0;i<tab_h_map.length;i++){
		var c = new Element('TD');	
		c.entity.style.background = '#f3f3f3';
		c.entity.style.color = '#3963B9';
		c.setID(tab_h_map[i]);
		row.append(c);
	}
	body.append(row);
	info_tab.push(head,body);
	info_tab.head = head;
	info_tab.body = body;
	context.push(info_tab);

	debug_panel.push(title,browser_version,error,control,context);
	debug_panel.title = title;
	debug_panel.error = error;
	debug_panel.context = context;
	debug_panel.tab = info_tab;
	$.Debug = debug_panel;
	$.Debug.tab.getInfo = function(p,t){
		ID('Module').innerHTML = $.CurrentModule;
		ID('Application').innerHTML = $.CurrentApp;
		var pan = $.Modules[$.CurrentModule].Apps[$.CurrentApp].Pans;
		if(p){
			ID('Panel').innerHTML = pan.name;
		}else{
			ID('Panel').innerHTML = '--';
		}
		if(t){
			ID('Tag').innerHTML = 'name:' + t.name;
		}else{
			ID('Tag').innerHTML = '--';
		}
	} 
	$.Debug.tab.addRow = function(name){
			
	} 
	$.Debug.showErr = function(msg){
		this.error.dd.html(msg);
	}
	document.body.appendChild(debug_panel.entity);
}

var debugData = {
//add after
	'language':"1",
	'wakeup_ip':'192.168.1.1',
	'wakeup_port':'80',
	'wakeup_mac':'08:10:11:78:30:cc',

	"reboot_enable":'0',
	"reboot_hour":'3',
	"reboot_min":'30',
	
	"time_type":'1',
	"time_date":'2008',
	"time_date2":'12',
	"time_date3":'08',

	"time_time":'23',
	"time_time2":'60',
	"time_time3":'60',

	'opmode':'1',
//status
	'version_num':'NW604',
	'version':'netis()-V1.1.25087,2014.01.25,10:43',
	'ip':'192.168.1.6',
	'mask':'255.255.255.0',
	'gw':'192.168.1.1',
	'connected':'1',
	'run_time':'0.7.57.34',
	'cpu':'1%',
	'mem':'15%',
	'con_time':'10.1.12.2',
	'active_num':'4',
//host
    'lan_all':'2',
    'lan_online':'2',
    'lan_num':'3',
    'lan_require':'0/0',
    'lan_speed':'0/0',
    'lan_byte':'0/0',
//wps
	'wps_enable':'1',
	'pin':'01234567',
//wan_set
	
	'l2tp_user':'l2tp_user',
	'l2tp_pwd':'l2tp_pwd',
	'pptp_user':'pptp_user',
	'pptp_pwd':'pptp_pwd',
	'server_ip_name':'servername',
	'l2tp_type':'0',
	'l2tp_ip':'192.168.2.2',
	'l2tp_mask':'255.255.255.0',
	'l2tp_gw':'192.168.2.1',
	'pptp_type':'1',
	'pptp_ip':'192.168.2.2',
	'pptp_mask':'255.255.255.0',
	'pptp_gw':'192.168.2.1',
	'second_in_type':'0',
	'second_ip':"10.0.0.12",
	'second_mask':'255.255.0.0',

	'access_mode':'0', //接入方式 0-route,1-bridge,2-WISP,3-3G
	'chip_flag':'1',
	'conntype':'0',
	'tag_type':'2',
	'xk_os_version':'2',
	'xk_version':'6',
	'wt_version':'2',
	'ip_username':'guest',
	'ip_pwd':'guest',
	'ip_server_ip':'10.0.0.1',
	'ip_server_gw':'10.0.1.1',
	'host_name':'Netcore',
	//'work_mode':'1',
	'wan_ip':'172.16.65.103',
	'wan_mask':'255.255.255.0',
	'wan_gw':'172.16.65.1',
	'dhcp_ip':'0.0.0.0',
	'dhcp_mask':'0.0.0.0',
	'dhcp_gw':'0.0.0.0',
	'dhcp_mtu':'1500',
	'dns_a':'10.0.0.1',
	'dns_b':'0.0.0.0',
	'special_access':'0',
	'pppoe_username':'pppoe_user',
	'pppoe_pwd':'123',
	'ppp_connect_mode':'0',
	'pppoe_service_name':'servername',
	'pppoe_ac_name':'acname',
	'ppp_time':'5',
	'l2tp_time':'5',
	'pptp_time':'5',
	'ns_ver':'1',
//lan_set
	'lan_mac':'08:10:11:78:cc:cc',
	'lan_ip':'192.168.1.1',
	'lan_mask':'255.255.255.0',

//iptv_set
	'iptv_mode':'2',
	'iptv_port':'1',
	'vlan_tag_enable':'1',
	'vlan_id_inter':'123',
	'vlan_pri_inter':'4',
	'vlan_id_iptv':'234',
	'vlan_pri_iptv':'2',
	'mvlan_id_iptv':'456',
	'mvlan_pri_iptv':'7',
	'vlan_id_phone':'876',
	'vlan_pri_phone':'1',
	'iptv_lan1_mode':'0',
	'iptv_lan2_mode':'1',
	'iptv_lan3_mode':'2',
	'iptv_lan4_mode':'0',
//mac_clone
	'mac_clone':'00:1c:c0:b0:1e:39',
	'mac_default':'08:10:11:78:30:c9',
//interface_set
	'wan':'3',
	'lan1':'2',
	'lan2':'3',
	'lan3':'0',
	'lan4':'1',

	'igmp_enable':'0',
	'work_mode':'0',

//wireless 
	'NetModeFlag':'0',
	'wl_config':'3',
	'remote_ap_name':'remote_ap_name',
	'remote_ap_mac':'08:10:17:81:96:11',
	'sec_set':'1',		//安全设置	
	'ap_repeater':'0',
	'repeater_enable':'0',
	//sec_ap0
	'wl_enable':'1',	//无线状态
	'ssid':'Netcore',
	'wl_stand':'7',		//无线标准
	'net_mode':'3',		//网络模式
	'net_type':'0',		//网络类型
	'wl_mac':'08:10:17:81:96:c1',
	'wl_mac_def':'08:10:17:81:96:c1',
	'ssid_broad':'0',		//ssid广播
	'channel_width':'1',	//频段带宽
	'channel_bind':'1',		//频道绑定
	'region':'1',
	'channel':'5',
	'real_channel':'2',
	'sec_contr':'0',
	'con_mac':'',

	'wds_sec_mode':'0',		//安全模式-wds
	'wds_key_mode_wep':'1',
	'wds_key_mode_wpa':'1',
	'wds_key_wep':'wep_password',
	'wds_key_wpa':'wpa_password',
	'sec_mode':'0',			//安全模式
	'key_size':'0',			//密钥长度
	'key_type':'3',			//加密类型
	'key_mode_wep':'1',			//密钥格式
	'key_mode_wpa':'1',			//密钥格式
	'key_wep':'wep_password',	//密钥
	'key_wpa':'wpa_password',	//密钥
	'key_time':'86400',		//更新周期
	'repeater_ssid':'repeater_ssid',
	'repeater_mac':'08:10:11:78:30:00',

	//sec_ap1
	'ap1_wl_enable':'0',	
	'ap1_ssid':'netis_VAP1',
	'ap1_wl_stand':'0',	
	'ap1_net_mode':'2',		
	'ap1_net_type':'1',		
	'ap1_wl_mac':'08:10:17:81:aa:a1',
	'ap1_ssioad':'1',
	'ap1_channel_width':'1',	
	'ap1_channel_bind':'0',	
	'ap1_region':'1',
	'ap1_channel':'3',
	'ap1_sec_contr':'0',
	'ap1_con_mac':'',

	'ap1_wds_sec_mode':'1',	
	'ap1_wds_key_mode_wep':'1',
	'ap1_wds_key_mode_wpa':'1',
	'ap1_wds_key_wep':'wep_password',
	'ap1_wds_key_wpa':'wpa_password',
	'ap1_sec_mode':'0',	
	'ap1_key_size':'1',		
	'ap1_key_type':'1',	
	'ap1_key_mode_wep':'1',		
	'ap1_key_mode_wpa':'1',		
	'ap1_key_wep':'wep_password_ap1',	
	'ap1_key_wpa':'wpa_password_ap1',	
	'ap1_key_time':'864',		
	'ap1_repeater_ssid':'repeater_ssid',

	//sec_ap2
	'ap2_wl_enable':'0',	
	'ap2_ssid':'netis_VAP2',
	'ap2_wl_stand':'0',	
	'ap2_net_mode':'2',		
	'ap2_net_type':'1',		
	'ap2_wl_mac':'08:10:17:81:aa:a2',
	'ap2_ssid_broad':'1',
	'ap2_channel_width':'1',	
	'ap2_channel_bind':'0',	
	'ap2_region':'1',
	'ap2_channel':'3',
	'ap2_sec_contr':'0',
	'ap2_con_mac':'',

	'ap2_wds_sec_mode':'1',	
	'ap2_wds_key_mode_wep':'1',
	'ap2_wds_key_mode_wpa':'1',
	'ap2_wds_key_wep':'wep_password',
	'ap2_wds_key_wpa':'wpa_password',
	'ap2_sec_mode':'1',	
	'ap2_key_size':'1',		
	'ap2_key_type':'1',	
	'ap2_key_mode_wep':'1',		
	'ap2_key_mode_wpa':'1',		
	'ap2_key_wep':'wep_password_ap2',	
	'ap2_key_wpa':'wpa_password_ap2',	
	'ap2_key_time':'864',		
	'ap2_repeater_ssid':'repeater_ssid',

	//sec_ap3
	'ap3_wl_enable':'0',	
	'ap3_ssid':'netis_VAP3',
	'ap3_wl_stand':'0',	
	'ap3_net_mode':'2',		
	'ap3_net_type':'1',		
	'ap3_wl_mac':'08:10:17:81:aa:a3',
	'ap3_ssid_broad':'1',
	'ap3_channel_width':'1',	
	'ap3_channel_bind':'0',	
	'ap3_region':'1',
	'ap3_channel':'3',
	'ap3_sec_contr':'0',
	'ap3_con_mac':'',

	'ap3_wds_sec_mode':'1',	
	'ap3_wds_key_mode_wep':'1',
	'ap3_wds_key_mode_wpa':'1',
	'ap3_wds_key_wep':'wep_password',
	'ap3_wds_key_wpa':'wpa_password',
	'ap3_sec_mode':'0',	
	'ap3_key_size':'1',		
	'ap3_key_type':'1',	
	'ap3_key_mode_wep':'1',		
	'ap3_key_mode_wpa':'1',		
	'ap3_key_wep':'wep_password_ap3',	
	'ap3_key_wpa':'wpa_password_ap3',	
	'ap3_key_time':'864',		
	'ap3_repeater_ssid':'repeater_ssid',

	//client
	'cl_sec_mode':'2',			//安全模式
	'cl_key_size':'0',			//密钥长度
	'cl_key_type':'3',			//加密类型
	'cl_key_mode_wep':'1',			//密钥格式
	'cl_key_mode_wpa':'1',			//密钥格式
	'cl_key_wep':'wep_password',	//密钥
	'cl_key_wpa':'wpa_password',	//密钥
	'cl_key_time':'86400',		//更新周期

	
	//reapter 
	'rp_wl_enable':'0',	
	'rp_ssid':'netcore_rp',
	'rp_wl_stand':'10',	
	'rp_net_mode':'2',	
	'rp_net_type':'1',	
	'rp_wl_mac':'08:10:17:81:96:rr',
	'rp_ssid_broad':'0',
	'rp_channel_width':'1',	
	'rp_channel_bind':'0',	
	'rp_region':'1',
	'rp_channel':'9',
	'rp_sec_contr':'0',
	'rp_con_mac':'',

	'rp_wds_sec_mode':'1',
	'rp_wds_key_mode_wep':'1',
	'rp_wds_key_mode_wpa':'1',
	'rp_wds_key_wep':'wep_password',
	'rp_wds_key_wpa':'wpa_password',
	'rp_sec_mode':'1',	
	'rp_key_size':'0',
	'rp_key_type':'3',	
	'rp_key_mode_wep':'1',	
	'rp_key_mode_wpa':'1',	
	'rp_key_wep':'wep_password_rp',
	'rp_key_wpa':'wpa_password_rp',
	'rp_key_time':'8640',
	'rp_repeater_ssid':'repeater_ssid',

	'wds_enable':'0',
//wl_mac_filter
	'wl_mac_filter_enable':'0',
	'wl_mac_filter_rule':'0',
//advance
	'roam':'1',
	'isolotion':'1',
	'shortGi':'1',
	'wmm':'0',
	'protection':'0',
	'out_power':'0',
	'wl_power':'1',


	'auth_type':'1',
	'beacon':'100',
	'rts':'2347',
	'agg_status':'1',
	'fragment':'2346',
	'rate_mode':'2',
	'preamble':'0',
	'wlan_partition':'1',
	'iapp':'1',


//dhcp
	'dhcp_enable':'1',
	'dhcp_start_ip':'192.168.0.6',
	'dhcp_end_ip':'192.168.1.2',
	'dhcp_time':'86400',
//dmz
	'dmz_enable':'0',
	'dmz_ip':'192.168.1.12',
	'super_dmz_enable':'1',
	'super_dmz_addr':'00:1c:c0:b0:1e:39',
	'wan_link_host':'00:1c:c0:b0:1e:40',

	'upnp_enable':'1',
	'ftp_enable':'0',
	'ftp_port':'21',
//vpn
	'ipsec_enable':'1',
	'l2tp_enable':'1',
	'pptp_enable':'1',

	'remote_enable':'0',
	'remote_port':'8080',
	'web_port':'80',
//manage
	'ip_filter_enable':'0',
	'ip_filter_rule':'0',
	'mac_filter_enable':'0',
	'mac_filter_rule':'0',
	'dns_filter_enable':'0',
	'dns_filter_rule':'0',
//qos
	'qos_enable':'0',
	'qos_up_rule':'0',
	'qos_up_speed':'111',
	'qos_down_rule':'0',
	'qos_down_speed':'222',
	'qos_rule_up':'up',
	'qos_rule_down':'down',
	'qos_speed_up':'123',
	'qos_speed_down':'456',
//ddns
	'ddns_enable':'1',
	'ddns_sp':'no-ip',
	'ddns_port':'666',
	'ddns_username':'ddns.cn-soft',
	'ddns_password':'ddns',
	'ddns_change_name':'meibu',
	'ddns_hostname':'no',
	'ddns_info':['DDNS_STATE_AUTH_OK'],
	//'ddns_info':'DDNS_ERR_CONNECTING',
	//'ddns_info':'DDNS_ERR_OK,ST,www.oray.com',
	//'ddns_info':'DDNS_ERR_OK,www.meibu.com',
//misc
	'time_now':'05/28/2012 18:27:46',
	'timezone':'-8 1',
	'old_user':'guest',
	'old_pwd':'',
	'pc_mac':'00:00:00:00:00:00',
//attack_defense
    'ping_wan':'0',
    'ping_lan':'0',
	'icmp_flood':'0',
	'icmp_flood_v':'22',
	'tcp_flood':'1',
	'tcp_flood_v':'33',
	'udp_flood':'1',
	'udp_flood_v':'44',

//con_limit
    'con_limit_num':'1024',
    'con_limit_all':'30', 
//wol
    'wakeup_ip' :'192.168.1.3',
    'wakeup_port':'8888',
    'wakeup_mac':'12:23:43:ff:dc:e3',
//diag
    'p_output':'jfsjasjfasljfasklklsa',
    'p_running':'0',
    't_output':'jkjjjjjjjjjjjjj',
    't_running':'0',

	'tools_type':'0',
	'tools_ip_url':'192.168.1.1',
	'tools_cmd':'0',
	'tools_count':'4',
	'tools_pkt_size':'64',
	'tools_timeout':'123',
	'tools_ttl':'11',
	'tools_results':"PING 192.168.1.1 (192.168.1.1): 56 data bytes;64 bytes from 192.168.1.1: icmp_seq=0 ttl=255 time=0.0 ms;64 bytes from 192.168.1.1: icmp_seq=1 ttl=255 time=0.0 ms;64 bytes from 192.168.1.1: icmp_seq=2 ttl=255 time=0.0 ms;64 bytes from 192.168.1.1: icmp_seq=3 ttl=255 time=0.0 ms;;--- 192.168.1.1 ping statistics ---;4 packets transmitted, 4 packets received, 0% packet loss;round-trip min/avg/max = 0.0/0.0/0.0 ms;",

    "test":[{'id':'1','type':'test','ip':'192.168.1.12','mac':'00:1c:c0:11:11:11','other':'iiiiiii'},{'id':'2','type':'test2','ip':'192.168.2.22','mac':'00:1c:c0:22:22:22','other':'22222'}],
	//'interface_tab':[{iface:'WAN',iface_mode:'0',st:'连接',sp:'100M',sg:'全双工'},{iface:'LAN1',iface_mode:'1',st:'连接',sp:'100M',sg:'全双工'},{iface:'LAN2',iface_mode:'2',st:'连接',sp:'100M',sg:'全双工'},{iface:'LAN3',iface_mode:'3',st:'连接',sp:'100M',sg:'全双工'},{iface:'LAN4',iface_mode:'0',st:'连接',sp:'100M',sg:'全双工'}],
	'interface_list':[{iface:'WAN',iface_mode:'0',st:'连接',sp:'100M',sg:'全双工'}],
	'statistics_list':[{type:'LAN',rx_pack:'598',rx_byte:'1776',tx_pack:'75',tx_byte:'333'},{type:'WAN',rx_pack:'598',rx_byte:'1776',tx_pack:'75',tx_byte:'333'},{type:'WLAN',rx_pack:'598',rx_byte:'1776',tx_pack:'75',tx_byte:'333'}],
	'host_monitor_list':[{id:'1',lan_ip:'192.168.1.12',lan_name:'lauai',lan_con:'2',up_speed:'200',down_speed:'200',up_byte:'2000',down_byte:'2000'}],
	'wps_list':[{secmode:"无",type:'',mode:'',key:''}],
	'wl_mac_filter_list':[{id:'1',mac_des:"macs",macaddr:'00:1c:c0:b0:1e:34'},{id:'2',mac_des:"mas",macaddr:'00:1c:c0:b0:1e:33'}],
	'reservation_list':[{id:'1',reserve_des:'des1',reserve_ip:'192.168.1.12',reserve_mac:'12:23:43:ff:dc:e4',xx:'safsafa'},{id:'2',reserve_des:'ds2',reserve_ip:'192.168.3.33',reserve_mac:'00:1c:c0:b0:1e:66',xx:'s111111'}],
	//'wol_list':[{id:'1',wol_status:'1',wol_des:'wol',wol_rule:'Enable',wol_mac:'30:1c:c0:b0:1e:33',wol_host:'status'}],
	'wl_wds_list':[{id:'1',wds_name:'wds',wds_mac:'00:1c:c0:b0:1e:33'},{id:'2',wds_name:'wds',wds_mac:'00:1c:c0:b0:1e:32'}],
	'wl_link_ap0_list':[{id:'1',father:'ap',host:'lauai0',mac:'00:1c:c0:b0:1e:00',mode:'WEP',tx_pack:'1157',rx_pack:'1311',speed:'123',ps_mode:'Yes',link_time:'60'},{id:'2',father:'ap',host:'lauai01',mac:'00:1c:c0:b0:01:01',mode:'WEP',tx_pack:'1157',rx_pack:'1311',speed:'123',ps_mode:'Yes',link_time:'60'}],
	'wl_link_ap1_list':[{id:'1',father:'ap1',host:'lauai1',mac:'10:1c:c0:b0:10:10',mode:'WEP',tx_pack:'1157',rx_pack:'1311',speed:'123',ps_mode:'Yes',link_time:'60'},{id:'2',father:'ap1',host:'lauai11',mac:'11:1c:c0:b0:11:11',mode:'WEP',tx_pack:'1157',rx_pack:'1311',speed:'123',ps_mode:'Yes',link_time:'60'}],
	'wl_link_ap2_list':[{id:'1',father:'ap2',host:'lauai2',mac:'20:1c:c0:b0:20:20',mode:'WEP',tx_pack:'1157',rx_pack:'1311',speed:'123',ps_mode:'Yes',link_time:'60'},{id:'2',father:'ap2',host:'lauai21',mac:'22:1c:c0:b0:21:21',mode:'WEP',tx_pack:'1157',rx_pack:'1311',speed:'123',ps_mode:'Yes',link_time:'60'}],
	'dhcp_client_list':[{id:'1',ip:'192.168.1.3',mac:'00:1c:c0:b0:1e:66',host:'LAUAI-9C082B5D4',reserved:'Dynamic',status:'0'},{id:'2',ip:'192.168.33.3',mac:'00:1c:c0:b0:1e:66',host:'yyyy',reserved:'Static',status:'0'},{id:'3',ip:'192.168.7.7',mac:'00:1c:c0:b0:1e:77',host:'xxx',reserved:'Dynamic',status:'0'}],
	'dhcp_static_list':[{id:'1',mac:'00:1c:c0:b0:1e:77',ip:'192.168.1.12'}],
	'virtual_server_list':[{id:'1',vir_name:'name',vir_ip:'192.168.1.11',vir_proto:'2',vir_outport_start:'20',vir_outport_end:'30',vir_inport_start:'23',vir_inport_end:'24'},{id:'2',vir_name:'name2',vir_ip:'192.168.1.22',vir_proto:'1',vir_outport_start:'31',vir_outport_end:'33',vir_inport_start:'41',vir_inport_end:'41'},{id:'3',vir_name:'name3',vir_ip:'192.168.1.33',vir_proto:'1',vir_outport_start:'31',vir_outport_end:'33',vir_inport_start:'55',vir_inport_end:'55'}],
	'app_port_list':[{id:'1',app_name:'GuruGuru',trigger_proto:'1',app_port_start:'31200',app_port_end:'31200',forward_proto:'1',forward_port_start:'9292',forward_port_end:'9292'},{id:'2',app_name:'Sxx',trigger_proto:'2',app_port_start:'200',app_port_end:'300',forward_proto:'2',forward_port_start:'92',forward_port_end:'94'}],
	'ip_filter_list':[{id:'1',ip_describe:'ip',ip_status:'1',ip_rule:'0',ip_src_sele:'sub_host',ip_src_start:'192.168.1.1',ip_src_end:'192.168.1.254',ip_des_sele:'all',ip_des_start:'1.0.0.1',ip_des_end:'223.255.255.254',ip_proto:'1',ip_port_start:'33',ip_port_end:'44',ip_day:'Sun Mon Tue Wed Thu Fri Sat',ip_time:'11:30-20:30'},{id:'2',ip_describe:'ip2',ip_status:'0',ip_rule:'1',ip_src_sele:'ip_host',ip_src_start:'192.168.1.11',ip_src_end:'192.168.1.13',ip_des_sele:'all',ip_des_start:'192.168.1.11',ip_des_end:'192.168.1.14',ip_proto:'4',ip_port_start:'',ip_port_end:'',ip_day:'Sun Mon Tue Wed Thu Fri Sat',ip_time:'11:30-20:30'},{id:'3',ip_describe:'ip3',ip_status:'1',ip_rule:'0',ip_src_sele:'sub_host',ip_src_start:'192.168.1.1',ip_src_end:'192.168.1.254',ip_des_sele:'all',ip_des_start:'1.0.0.1',ip_des_end:'223.255.255.254',ip_proto:'3',ip_port_start:'33',ip_port_end:'44',ip_day:'Sun Mon Tue Wed Thu Fri Sat',ip_time:'all'}],
	'mac_filter_list':[{id:'1',mac_describe:'macs1',mac_status:'1',mac_rule:'0',mac_filter:'00:1c:c0:b0:1e:35',mac_day:'Mon',mac_time:'10:30-11:30'},{id:'2',mac_describe:'macs2',mac_status:'1',mac_rule:'1',mac_filter:'00:1c:c0:b0:1e:35',mac_day:'Sun Fri Sat Wed',mac_time:'all'},{id:'3',mac_describe:'macs3',mac_status:'1',mac_rule:'1',mac_filter:'00:1c:c0:b0:1e:35',mac_day:'Sun Fri Sat',mac_time:'all'}],
	'dns_filter_list':[{id:'1',dns_des:'domain',dns_st:'st',dns_rule:'1',dns_key:'key',dns_day:'all',dns_time:'all'},{id:'2',dns_des:'domain',dns_st:'st',dns_rule:'1',dns_key:'key',dns_day:'Mon',dns_time:'09:30-11:30'}],
	'port_filter_list':[{id:'1',describe:'port',st:'st',rule:'rule',pro:'TCP',port:'88',day:'all',time:'all'}],
	'binds_list':[{id:'1',binds_des:'binds1',binds_ip:'192.168.1.12',binds_mac:'00:1c:c0:b0:1e:22',binds_port:'0'},{id:'2',binds_des:'binds2',binds_ip:'192.168.1.11',binds_mac:'00:1c:c0:b0:1e:11',binds_port:'1'}],
	'arp_list':[{id:'1',arp_ip:'192.168.1.111',arp_mac:'00:1c:11:11:11:11',arp_st:'0x2'},{id:'2',arp_ip:'192.168.2.222',arp_mac:'00:1c:22:22:22:22',arp_st:'0x2'}],
	'static_routing_list':[{id:'1',route_des:'route',route_type:'HOST',ip_value:'192.168.1.12',mask_value:'255.255.255.255',gateway_value:'192.168.1.1'},{id:'2',route_des:'routes',route_type:'NET',ip_value:'192.168.1.11',mask_value:'255.255.255.0',gateway_value:'192.168.1.0'}],
	'qos_rule_list':[{id:'1',qos_des:'qos',qos_status:'0',qos_ip_start:'192.168.1.4',qos_ip_end:'192.168.1.5',qos_min_up:'0',qos_max_up:'22',qos_min_down:'33',qos_max_down:'44',qos_sele:'sub_host'},{id:'2',qos_des:'qos2',qos_status:'1',qos_ip_start:'192.168.1.6',qos_ip_end:'192.168.1.8',qos_min_up:'1',qos_max_up:'2',qos_min_down:'3',qos_max_down:'4',qos_sele:'ip_host'}],
	//'sys_log':[{id:'1',time:'no',info:'no'}],
	//'sys_log':[{"time":"2010-12-1 0:1:41","event":"LOG_SYSTEM_EVENT_LOGIN","action":"1","msg":["192.168.1.2"]},{"time":"2010-12-1 0:1:29","event":"LOG_SYSTEM_EVENT_LOGIN","action":"1","msg":["192.168.1.2"]},{"time":"2010-12-1 0:1:24","event":"LOG_SYSTEM_EVENT_LOGIN","action":"2","msg":["192.168.1.2"]},{"time":"2010-12-1 0:1:17","event":"LOG_SYSTEM_EVENT_LOGIN","action":"2","msg":["192.168.1.2"]},{"time":"2010-12-1 0:1:11","event":"LOG_SYSTEM_EVENT_LOGIN","action":"2","msg":["192.168.1.2"]},{"time":"2010-12-1 0:0:0","event":"LOG_SYSTEM_EVENT_STARTUP","action":"1","msg":[]}],
	'sys_log':[{'id':'1','log':'0,CONNECTION,2013-05-04 04:20:41,udhcpc,42,id=1:,["dhcp_send_discover"]'},{'id':'2','log':'0,CONNECTION,2013-05-04 04:20:43,udhcpc,7,id=1:,["dhcp_send_discover_no_respone"]'},{'id':'3','log':'0,CONNECTION,2013-05-04 04:21:55,udhcpc,42,id=1:,["dhcp_send_discover"]'}],
	'connect_log':[{id:'1',time:'no',info:'no'}],
	'attack_log_list':[{id:'1',time:'no',info:'no'},{id:'2',time:'12356',info:'155'}],
	'limit_connect_list':[{id:'1',con_limit_start:'192.168.1.3',con_limit_end:'192.168.1.5',con_limit_one:'0',con_limit_seg:'20'},{id:'2',con_limit_start:'192.168.1.7',con_limit_end:'192.168.1.8',con_limit_one:'10',con_limit_seg:'40'}],
	'ap_scan_list':[{id:'1',wl_ss_ssid:'ssid',wl_ss_bssid:'00:1c:c0:b0:1e:11',wl_ss_channel:'6 (B)',wl_ss_mode:'AP',wl_ss_secmo:'WEP',wl_ss_sin:'sig',wl_ss_type:'--'},{id:'2',wl_ss_ssid:'ssid2',wl_ss_bssid:'00:1c:c0:b0:1e:22',wl_ss_channel:'7 --',wl_ss_mode:'AP2',wl_ss_secmo:'WPA',wl_ss_sin:'sig2',wl_ss_type:'AES&TKIP'},{id:'3',wl_ss_ssid:'ssid3',wl_ss_bssid:'00:1c:c0:b0:1e:33',wl_ss_channel:'12 (B+G)',wl_ss_mode:'AP3',wl_ss_secmo:'WPA2',wl_ss_sin:'sig3',wl_ss_type:'AES'},{id:'4',wl_ss_ssid:'ssid4',wl_ss_bssid:'00:1c:c0:b0:1e:44',wl_ss_channel:'12 (B+G)',wl_ss_mode:'AP4',wl_ss_secmo:'WPA/WPA2',wl_ss_sin:'sig4',wl_ss_type:'AES&TKIP'}]
}