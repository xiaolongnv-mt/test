

/* 判空 */
export function isDef(v) {
	return v !== undefined && v !== null && v !== '';
}

export function getNowDate(){
	let now=new Date()
	let year=now.getFullYear();
	let m=now.getMonth()+1
	let month=m<10?'0'+m:m
	let d=now.getDate()
	let day=d<10?'0'+d:d;
	return `${year}-${month}-${day}`

}
//获取当前日期前XXX分钟
export function getPreMin(slit,mins) {
	const d = new Date();
	const min=d.getMinutes();
	d.setMinutes(min-mins);
	const y = d.getFullYear();
	const m = d.getMonth() < 10 ? `0${d.getMonth() + 1}` : (d.getMonth() + 1);
	const dd = d.getDate() < 10 ? `0${d.getDate()}` : (d.getDate());
	var h = d.getHours() < 10 ? ('0' + d.getHours()) : d.getHours();
	var f = d.getMinutes() < 10 ? ('0' + d.getMinutes()) : d.getMinutes();
	var s = d.getSeconds() < 10 ? ('0' + d.getSeconds()) : d.getSeconds();
	return isDef(slit) ? y + slit + m + slit + dd +' '+h+':'+f+':'+s+'': `${y}年${m}月${dd}日`;
}
//获取当前日期上一日
export function getPreDate(slit) {
	const d = new Date();
	const y = d.getFullYear();
	const m = d.getMonth() < 10 ? `0${d.getMonth() + 1}` : (d.getMonth() + 1);
	const dd = d.getDate() < 10 ? `0${d.getDate()-1}` : (d.getDate()-1);
	return isDef(slit) ? y + slit + m + slit + dd : `${y}年${m}月${dd}日`;
}
// 获取上一个月
export function getPreMonth(slit,selfDate) {
	try {
		const d = selfDate || new Date();
		const y = d.getFullYear();
		const m = d.getMonth() < 10 ? `0${d.getMonth()}` : d.getMonth();
		if (m === '00') {
			const yy = y - 1;
			const mm = 12;
			return isDef(slit) ? yy + slit + mm : `${yy}年${mm}月`;
		}
		return isDef(slit) ? y + slit + m : `${y}年${m}月`;
	} catch (e) {
		return '';
	}
}
// 获取上年
export function getPreYear(slit) {
	try {
		const d = new Date();
		const y = d.getFullYear()-1;
		return isDef(slit) ? `${y}`: `${y}年`;
	} catch (e) {
		return '';
	}
}

export function uuid() {
	var s = [];
	var hexDigits = "0123456789abcdef";
	for (var i = 0; i < 36; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	}
	s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
	s[8] = s[13] = s[18] = s[23] = "-";

	var uuid = s.join("");
	return uuid;
}
