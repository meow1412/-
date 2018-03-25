
	function myAjax(requestUrl,callback){
		$.ajax({
			url: requestUrl,
			type: 'GET',
			dataType: 'json',
		})
		.done(function(data) {
			callback(data);
		})
	}
		

	var host="data/";
	// 有好货
		myAjax(host+"hasgoods.txt",function(data){
			$.each(data.result["1164535"].result,function(index, value) {
				var imgUrl="http:"+value.pic;
				var $a=$("<a></a>").attr('href', "http:"+value.url ).addClass('goods-list');
				var $img = $("<img src=' ' data-img="+imgUrl+" alt='' />").addClass('lazyload');
				var $div=$("<div></div>");
				var $p1=$("<p></p>").addClass('p1').html(value.title);
				var $p2=$("<p></p>").addClass('p2').html(value.content);
				var $span=$("<span>有"+value.zanTotal+"人觉得自己萌萌哒</span>");
				$div.append($p1).append($p2).append($span);
				$a.append($img).append($div);
				$a.hover(function() {
					$p1.css('color', '#f40');
					$img.css('opacity', '0.8');
				}, function() {
					$p1.css('color', '#3c3c3c');
					$img.css('opacity', '1');
				});
				$(".change").before($a);
			});
				$.imgLazyLoad({});//懒加载
		})
	// 每日好店
		myAjax(host+"everyday-shop.txt",function(data){
			$.each(data.result["1164537"].result, function(index, val) {
				if(index==4){
					return;
				}
				var $a=$("<a href='"+val.url+"'></a>");
				var $strong=$("<span></span>").append(val.categoryName);
				var $p=$("<p>暂无店铺评价</p>");
				var $img1=$('<img src="" data-img="http:'+val.pic1+'" />').addClass('lazyload');
				var $img2=$('<img src="" data-img="http:'+val.pic2+'" />').addClass('lazyload');
				var $div2=$('<div class="left"></div>').append($img1).append($img2);
				var $bigimg=$('<img src="" data-img="http:'+val.picThumb+'" />').addClass('lazyload');
				var $div1=$('<div class="shop-box"></div>').append($div2).append($bigimg);
				$a.append($strong).append($p).append($div1);
				var $li=$("<li></li>").append($a);
				$("div.shop .shop-list").append($li);
				$li.hover(function() {
					$strong.css('color', '#f40');
				}, function() {
					$strong.css('color', '#3c3c3c');
				});
			});
		})
	//品质生活家
		myAjax(host+"quality-life.txt",function(data){
			$.each(data, function(index, val) {
				 //测试长度
				 // console.log(data[index].value.blockitem.length);
				 	var $li=$("<li></li>");
				 	var $tit_img=$('<img src="'+val.value.head[0].img+'"/>');
				 	var $tit_a=$("<a href='"+val.value.head[0].link+"'></a>").append($tit_img);
				 	var $tit_h3=$("<h3></h3>").append($tit_a);
				 	var $tit_d=$("<div class='tit'></div>").append($tit_h3);
				 if(data[index].value.blockitem.length==2){
				 	var $box2_em=$("<em>"+data[index].value.blockitem[0].sub+"</em>")
				 	var $box2_em1=$("<em>"+data[index].value.blockitem[1].sub+"</em>")
				 	var $box2_strong=$("<strong>"+data[index].value.blockitem[0].name+"</strong>")
				 	var $box2_strong1=$("<strong>"+data[index].value.blockitem[1].name+"</strong>")
				 	var $box2_img=$('<img src="'+data[index].value.blockitem[0].img+'" />')
				 	var $box2_img1=$('<img src="'+data[index].value.blockitem[1].img+'" />')
				 	var $box2_a=$("<a></a>").attr('href', val.value.head[0].link).append($box2_img).append($box2_strong).append($box2_em);
				 	var $box2_a1=$("<a></a>").attr('href', val.value.head[0].link).append($box2_img1).append($box2_strong1).append($box2_em1);
				 	var $text_box=$("<div class='text-box'>").append($box2_a);
				 	var $text_box1=$("<div class='text-box'>").append($box2_a1);
				 	var $box2=$("<div class='box-2'>").append($text_box).append($text_box1);


				 	var blocklinks=data[index].value.blocklinks;
				 	var $box2_b=$("<div class='box-2-bottom'></div>");
				 	$.each(blocklinks, function(index, val) {
				 		 var $a=$("<a href='"+blocklinks[index].link+"'>"+blocklinks[index].text+"</a>");
				 		 $box2_b.append($a);
				 	});
				 	$li.append($tit_d).append($box2).append($box2_b);
				 }else if(data[index].value.blockitem.length==4){
				 	var box4=$("<div class='box-4'></div>");
				 	$.each(data[index].value.blockitem, function(index, val) {
				 		var span=$("<span class='snav'>"+val.text+"</span>")
				 		var img=$("<img src='"+val.img+"' / >");
				 		var a=$("<a class='smalla' href='"+val.link+"'></a>").append(img).append(span);
				 		box4.append(a);
				 		$li.append($tit_d).append(box4);
				 	});
				 }
				 $(".quaul").append($li);
			});
		})




	//特色玩味控
		myAjax(host+"feature-play.txt",function(data){
			$.each(data, function(index, val) {
				var box_4=$("<div class='box-4'></div>");
				var box_2=$("<div class='box-2'></div>");
				var h3=$("<h3><a href='"+val.value.head[0].link+"'><img src='"+val.value.head[0].img+"' /></a></h3>");
				var tit=$("<div class='tit'></div>").append(h3);
				var li=$("<li></li>").append(tit);
				if(val.value.blockitem.length>=4){
					$.each(val.value.blockitem, function(index, value) {
						var span=$("<span class='snav'>"+value.text+"</span>");
						var img=$("<img src='"+value.img+"' />");
						var a=$("<a class='smalla' href='"+value.link+"'></a>").append(img).append(span);
						box_4.append(a);
						li.append(box_4);
					});
				}else{
					$.each(val.value.blockitem, function(index, value) {
						if(index>=2){
							return;
						}
						var strong=$("<strong>"+value.name+"</strong>");
						var em=$("<em>"+value.sub+"</em>");
						var img=$("<img src='"+value.img+"' />");
						var a=$("<a href='"+value.link+"'></a>").append(img).append(strong).append(em);
						var text_box=$("<div class='text-box'></div>").append(a);
						box_2.append(text_box);
					});
						var bottom=$("<div class='box-2-bottom'></div>");
						$.each(val.value.blocklinks, function(index, va) {
							var a=$("<a href='"+va.link+"'>"+va.text+"</a>");
							bottom.append(a);
						});
						li.append(box_2).append(bottom);
				}
				$(".special ul").append(li);
			});
		})


	//时尚爆料王
		myAjax(host+"fashion.txt",function(data){
			$.each(data, function(key, val) {
				var li=$("<li></li>");			
				if(val.value.head[0].img.charAt("https:")!=-1){
					val.value.head[0].img=(val.value.head[0].img).substr(val.value.head[0].img.indexOf(":")+1);
				}
				// 标题栏
				var img=$("<img src='http:"+val.value.head[0].img+"' />");
				var a=$("<a href='"+val.value.head[0].link+"'></a>").append(img);
				var h3=$("<h3></h3>").append(a);
				var tit_div=$("<div class='tit'></div>").append(h3);
				li.append(tit_div);
				if(val.value.banner){
					var span1=$("<span class='snav'>"+val.value.blockitem[0].text+"</span>");
					var span2=$("<span class='snav'>"+val.value.blockitem[1].text+"</span>");
					var img1=$("<img src='"+val.value.blockitem[0].img+"' />");
					var img2=$("<img src='"+val.value.blockitem[1].img+"' />");
					var a1=$("<a class='smalla' href='"+val.value.blockitem[0].link+"'></a>").append(img1).append(span1);
					var a2=$("<a class='smalla' href='"+val.value.blockitem[1].link+"'></a>").append(img2).append(span2);
					var span=$("<span>"+val.value.banner[0].text+"</span>").css('background',val.value.head[0].color );
					var img=$("<img src='"+val.value.banner[0].img+"' />");
					var a=$("<a class='biga' href='"+val.value.banner[0].link+"'></a>").append(img).append(span);
					var box3=$("<div class='box-3'></div>").append(a).append(a1).append(a2);
					li.append(box3);
				}else{
					var box4=$("<div class='box-4'></div>");
					$.each(val.value.blockitem, function(index, value) {
						var span=$("<span class='snav'>"+value.text+"</span>");
						var img=$("<img src='"+value.img+"' />");
						var a=$("<a class='smalla' href='"+value.link+"'></a>").append(img).append(span);
						box4.append(a);
					li.append(box4);
					});
				}
				$(".fation ul").append(li);
			});
		})
	// 我常逛的

		myAjax(host+"visited.txt",function(data){
			$.each(data.result["1164438"].result, function(index, val) {
			// 左边部分
				var div=$("<div></div>");
				$.each(val.hotwords, function(index, value) {
					if(index>=20){
						return;
					}
					var a=$("<a href='"+value.targetUrl+"'>"+value.text+"</a>");
					div.append(a);
				});
				var strong=("<strong>热门Top</strong>");
				var bottom=$("<div class=bottom></div>").css('background', val.totalinfo[0].logoBackgroundColor).append(strong).append(div);
				var cg_1=$("<div class='cg-l'></div>");
				var img=("<img src='"+val.totalinfo[0].imgUrl+"'>");
				var a=$("<a class='top' href='"+val.totalinfo[0].targetUrl+"'></a>").append(img);
				cg_1.append(a).append(bottom);
				$(".c-box").eq(index).append(cg_1);
				if(index<=1){
				// 右边
					// 右边上面	
						var top=$("<div class='top'></div>");
						$.each(val.activity, function(index, value) {
							var img=$("<img src='"+value.imgUrl+"' />");
							var a=$("<a class='cg-banner1' href='"+value.targetUrl+"'></a>").append(img);
							top.append(a);
						});
						
						var right=$("<div class='right'></div>");
						$.each(val.item, function(index, value) {
							var em=$("<em style='ont-size:12px;'>"+value.text2+"</em>");
							var strong=$("<strong>"+value.text1+"</strong>");
							var span=$("<span><img src='"+value.imgUrl+"'></span>");
							var a=$("<a href='"+value.targetUrl+"'></a>").append(span).append(strong).append(em);
							right.append(a);
						});
						top.append(right);
					//右边下面
						
						var a2=$("<a href='"+val.news[2].targetUrl+"'><img src='"+val.news[2].imgUrl+"' /><span class='nav-b'>"+val.news[2].text1+"</span></a>");
						var a1=$("<a href='"+val.news[1].targetUrl+"'><img src='"+val.news[1].imgUrl+"' /><span class='nav-b'>"+val.news[1].text1+"</span></a>");
						var nomal=$("<div class='nomal'></div>").append(a1).append(a2);
						var em=$("<em>"+val.news[0].text1+"</em>");
						var i=$("<i>"+val.news[0].text2+"</i>");
						var strong=$("<strong>"+val.news[0].text3+"</strong>");
						var s_all=$("<span class='s-all'></span>").append(em).append(i).append(strong);
						var img=$("<img src='"+val.news[0].imgUrl+"' />");
						var a=$("<a class='not tongyong' href='"+val.news[0].targetUrl+"'></a>").append(img).append(s_all);
						var bottom=$("<div class='bottom'></div>").append(a).append(nomal);
					}else{
						// 右边
							// 右边上部分
							var box_fl=$("<div class='box-fl'></div>");
							$.each(val.item, function(index, val) {
								if(index>=2){
									return;
								}
								var img=$("<img src='"+val.imgUrl+"'><span class='snav'>"+val.text1+"</span>");
								var a=$("<a class='cg-sbanner' href='"+val.targetUrl+"'></a>").append(img);
								box_fl.append(a);
							});
							var a1=$("<a class='cg-banner2' href='"+val.activity[1].targetUrl+"'><img src='"+val.activity[1].imgUrl+"' /></a>")
							var a=$("<a class='cg-banner1' href='"+val.activity[0].targetUrl+"'><img src='"+val.activity[0].imgUrl+"' /></a>")
							var top=$("<div class='top'></div>").append(box_fl).append(a).append(a1);
							// 右边下部分
							var right=$("<div class='right'></div>");
							$.each(val.item, function(index, val) {
								if(index>=2&&index<4){
									var strong=$("<strong>"+val.text1+"</strong><em>"+val.text2+"</em>");
									var span=$("<span><img src='"+val.imgUrl+"' /></span>");
									var a=$("<a href='"+val.targetUrl+"'></a>").append(span).append(strong);
									right.append(a);
								}
							});
							var em=$("<em>"+val.news[0].text1+"</em>");
							var i=$("<i>"+val.news[0].text2+"</i>");
							var strong=$("<strong>"+val.news[0].text3+"</strong>");
							var s_all=$("<span class='s-all'></span>").append(em).append(i).append(strong);
							var img=$("<img src='"+val.news[0].imgUrl+"' />");
							var a=$("<a class='tongyong' href='"+val.news[0].targetUrl+"'></a>").append(img).append(s_all);
							// var a=$("<a class='tongyong' href='"+val.news[0].targetUrl+"'><img src='"+val.news[0].imgUrl+"' /></a>");
							var bottom=$("<div class='bottom'></div>").append(a).append(right);
					}
						var cg_r=$("<div class='cg-r'></div>").append(top).append(bottom);
						$(".c-box").eq(index).append(cg_r);
			})
		})

	// 实惠专业户
		myAjax(host+'cheap-households.txt',function(data){
			// $.each(data, function(index1, val) {
			// 	var index=index1-222865;
			// 	$(".substantial li h3>a").eq(index).attr('href', val.value.head[0].link);
			// 	$(".substantial li h3>a img").eq(index).attr('src', val.value.head[0].img);
			// 	$(".substantial .s-c img").eq(index).attr('src',val.value.info[0].img);
			// 	if(index==0||index==4){
			// 		// if(index==0){
			// 		// 	$(".substantial .link h4").eq(index).html(Some text and markup)
			// 		// }
			// 	}else{
			// 		$(".substantial li .item-title").eq(index).html(val.value.info[0].name);
			// 		$(".substantial li em").eq(index).html(val.value.info[0].sub);
			// 		$(".substantial li .a-btn").eq(index).html(val.value.info[0].tag);
			// 	}
			// });
			$.each($(".substantial ul li"), function(index, val) {
				// console.log($(val).data("hehe"))
				var hh=data[$(val).data("hehe")];
				$(val).children("h3").children('a').children('img').attr('src', hh.value.head[0].img);
				$(val).children('.s-c').children('a').children('img').attr('src', hh.value.info[0].img);
				$(val).children('.s-c').children('.a-btn').html(hh.value.info[0].tag);
				$(val).children('.s-c').children('.item-title').html(hh.value.info[0].name);
				$(val).children('.s-c').children('em').html(hh.value.info[0].sub);
			});
		})



	// 阿里APP
		myAjax(host+"ali-app.txt",function(data){
			$.each(data, function(index, val) {
				 if(index=="result"){
				 	var ul=$("<ul></ul>");
				 	var div1=$("<div class='bottom_rt_bottom'></div>").append(ul);
				 	var a=$("<a href='"+val["1164532"].result["0"].more+"'>"+"更多➤"+"</a>");
				 	var p=$("<p>"+val["1164532"].result["0"].name+"</p>");
				 	var div=$("<div class='bottom_rt_top'></div>").append(p).append(a);
				 	$(".tb-bottom-right").append(div).append(div1);
						$.each(data.result["1164533"].result, function(index, val) {
							if(index>=10){
								return;
							}
							if(val.qr.charAt("http:")==-1){
								val.qr+="http:";
							}
							if(val.img.charAt("http:")==-1){
								val.img+="http:";
							}
							var p=$("<p>扫一扫"+val.name+"</p>");
							var img=$("<img src='"+val.qr+"' />");
							var divQr=$("<div class='qr'></div>").append(img).append(p);
							var bigImg=$("<img src='"+val.img+"' />");
							var a=$("<a href='"+val.link+"'></a>").append(bigImg);
							a.hover(function() {
								divQr.css('display', 'block');
							}, function() {
								divQr.css('display', 'none');
							});
							var li=$("<li></li>").append(a).append(divQr);
							$(".bottom_rt_bottom ul").append(li);
						});
				 }
			});
		})
	// 猜你喜欢
		myAjax(host+"guess-favourite.txt",function(data){
			$.each(data.result, function(index, val) {
				var p1=$("<p class='caiNiXiHuan-price'>"+"<span>￥"+val.promotionPrice+"<span>"+"</p>")
				var p=$("<p class='caiNiXiHuan-ms'>"+val.itemName+"</p>")
				var img=$('<img src="http:'+val.pic+'"/>')
				var a=$("<a href='"+val.url+"'></a>").append(img).append(p).append(p1);
				var div=$("<div><img src='../images/QQ截图找相似.png' /></div>")
				var li=$("<li class='caiNiXiHuan-item'></li>").append(a).append(div);
				li.hover(function() {
					$(this).children("div").children().css('display', 'block');
				}, function() {
					$(this).children("div").children().css('display', 'none');
				});
				$("#caiNiXiHuan_show").append(li);
			});
		})
	// 必买清单
		myAjax(host+"must-buy.txt",function(data){
			$.each(data.result["1164539"].result, function(index, val) {
				var p1=$("<p class='biMaiQingDan-desc'>"+val.authorName+"&nbsp;"+val.itemCount+"</p>");
				var ul=$("<ul></ul>");
				$.each(val.itemList, function(index, value) {
					var li=$("<li><a href='"+value.class+"'><img src='http:"+value.pic+"' /></a></li>");
					ul.append(li);
				});
				var p=$("<p class='biMaiQingDan-ms'>"+val.description+"</p>");
				var span=$("<span class='biMaiQingDan-title'>"+val.title+"</span>")
				var div=$("<div class='biMaiQingDan-item'></div>").append(span).append(p).append(ul).append(p1);
				$(".biMaiQingDan").append(div);
			});
		})
	//淘宝直播
		myAjax(host+"taobao-live.txt",function(data){
			var ul=$("<ul id='taoBaoZhiBo_wapper_right'></ul>");
			$.each(data.result["1164538"].result, function(index, val){
				if(index>=9){
					return;
				}
				if(index==3){
					var watch=$("<span class='watch'>"+val.data.viewCount+"观看</span>");
					var tag=$("<span class='tag'>直播</span>");
					var ft=$("<div class='ft'></div>").append(tag).append(watch);
					var bigImg=$("<div class='bigimg'></div>").css('background',"url('"+val.data.coverImg+"')").css('backgroundSize', '390px 390px');
					var box_span=$("<span>"+val.data.accountDO.accountNick+"</span>");
					var div_1=$("<div class='samlltx'></div>").css('background',"url('"+val.data.accountDO.headImg+"')").css('backgroundSize', '25px 25px');;
					var div=$("<div class='name'></div>").append(div_1).append(box_span);
					var box_b=$("<div class='taoBaoZhiBo-wapper-left-item'></div>").append(div).append(bigImg).append(ft);
					var box=$("<div class='taoBaoZhiBo-wapper-left'></div>").append(box_b);
					$(".taoBaoZhiBo").append(box);
				}else{
					var watch=$("<span class='watch'>"+val.data.viewCount+"观看</span>");
					var tag=$("<span class='tag'>直播</span>");
					var ft=$("<div class='ft'></div>").append(tag).append(watch);
					var smallimg=$("<div class='smallimg'></div>").css('background',"url('"+val.data.coverImg+"')").css('backgroundSize', '160px 160px');
					var span=$("<span>"+val.data.accountDO.accountNick+"</span>");
					var samlltx=$("<div class='samlltx'></div>").css('background',"url('"+val.data.accountDO.headImg+"')").css('backgroundSize', '25px 25px');;
					var name=$("<div class='name'></div>").append(samlltx).append(span);
					var li=$("<li class='taoBaoZhiBo_wapper_right-item'></li>").append(name).append(smallimg).append(ft);
					ul.append(li);
				}
			});
			$(".taoBaoZhiBo").append(ul);
		})
	// 热卖单品
		myAjax(host+"hot-sell.txt",function(json){
			$.each(json.data[0].adList, function(index, val) {
				if(index>=9){
					return;
				}
				 if(index%3==0){
				 	var line_3=$("<div class='line-3'><a href='"+val.EURL+"' class='comment'>评价&nbsp;"+val.STATICSCORE+"</a><a class='collcet' href='"+val.EURL+"'>收藏"+val.GRADE+"</a></div>");
				 	var sub_title=$("<div class='sub-title'><a class='context'>"+val.DESC+"</a></div>");
				 	var sell=$("<a href='"+val.EURL+"' class='sell'>月销"+val.SELL+"笔</a>");
				 	var line_2=$("<div class='line-2'></div>").append(sell);
				 	var line_1=$("<div class='line-1'><a href='"+val.EURL+"' class='price'>￥"+val.PROMOTEPRICE+"</a></div>");
				 	var img=$("<img src='"+val.TBGOODSLINK+"' />");
				 	var a=$("<a href='"+val.EURL+"'></a>").append(img);
				 	var li=$("<li class='rmdpBig'></li>").append(a).append(line_1).append(line_2).append(sub_title).append(line_3);
				 	$("#reMaiDanPin_Se").append(li);
				 	var li1=$("<li class='rmdpSmall'></li>");
				 	$("#reMaiDanPin_Se").append(li1);
				 }else{
					 	var line_2=$("<div class='item-line-2'><a href='"+val.EURL+"' class='sell'>月销"+val.SELL+"笔</a></div>");
					 	var line_1=$("<div class='item-line-1'><a href='"+val.EURL+"'>￥"+val.PROMOTEPRICE+"</a></div>");
					 	var img=$("<a href='"+val.EURL+"'><img src='"+val.TBGOODSLINK+"' /></a>");
					 	var item_1=$("<div class='item item_1'></div>").append(img).append(line_1).append(line_2);
					 	$(".rmdpSmall:last").append(item_1);
				 }
			});
		});
	//主题市场
		myAjax(host+"theme-market.txt",function(data){
			$.each($(".shichang-nav>li a"), function(index, el) {
				var tbsm=data[$(el).data("mb")];
				$(el).attr('href', tbsm.value.head[0].link).html(tbsm.value.head[0].name);
			});
		})
			myAjax(host+"theme-market.txt",function(json){
				$.each($(".shichang-nav>li"), function(index, val) {
					var sihukouben=$("<div class='sihukouben'></div>");
					var list_a=$(val).children('span').children('a');
					$.each(list_a, function(index, val1) {
						// console.log(json[$(val1).data("mb")].value.head[0].name);
						var p=$("<p></p>");
						$.each(json[$(val1).data("mb")].value.list, function(index, value) {
							var a=$("<a href='"+value.link+"'>"+value.name+"</a>");
							a.hover(function() {
								$(this).css('color', '#f40');
							}, function() {
								$(this).css('color', '#3c3c3c');
							});
							p.append(a);
						})
						var img=$("<img src='"+json[$(val1).data("mb")].value.head[0].logo+"' />");
						var nav=$("<a href='"+json[$(val1).data("mb")].value.head[0].link+"' class='nav'></a>").append(img).append(json[$(val1).data("mb")].value.head[0].name);
						var a_more=$("<a href='"+json[$(val1).data("mb")].value.head[0].link+"' class='a-more'>更多<i class='tb-icon'>➤</i></a>")
						var tit=$("<div class='tit'></div>").append(nav).append(a_more);
						var div=$("<div></div>").append(tit).append(p);
						sihukouben.append(div);
					});
					$(".sbtb").append(sihukouben);
				});
					$(".sbtb .sihukouben").eq(0).css('display', 'block');
			})

		var colorArr=["red","pink","blue","green","gray","orange"];
	// 滚动事件
		$(window).on("scroll",function(){
			// 悬浮搜索栏
			if($(window).scrollTop()>=520-54){
				$(".fixbox").css({top:'54px',position:"fixed"});
			}else{
				$(".fixbox").css({top:"520px",position:"absolute"});
			}
			// 悬浮列表
			if($(window).scrollTop()>$(".tb-search").offset().top+$(".tb-search").outerHeight()){
				$(".tb-search .search-d").addClass("fix").css({zIndex:"10",top:"7px"});
				$(".white").addClass('show');
			}else{
				$(".tb-search .search-d").removeClass("fix").css({zIndex:"0",top:0});
				$(".white").removeClass('show');
			}

			//列表切换
			for(var i=0;i<$(".jump").length;i++){
				if($(window).scrollTop()>=$(".jump").eq(i).offset().top-50){
					for(var j=0;j<$(".jump").length;j++){
						$(".fixbox li").eq(j).css('color',colorArr[j]);
						$(".fixbox li").eq(j).css('background',"none");
					}
					$(".fixbox li").eq(i).css('color', '#fff');
					$(".fixbox li").eq(i).css('background',colorArr[i]);
				}
			}
		})
			$(window).on("mousewheel",function(){
				$(".fixbox div").css('display', 'none');
			})

	//跳转
		$(".fixbox li").eq(0).css({backgroundColor:colorArr[0],color:"white"});
		$(function(){
			$(".fixbox li").on("click",function(){
				if($(this).index()==7){
					$("body").animate({scrollTop:0}, "fast");
				}
				if($(this).index()<7){
					var offsetTop=$(".jump").eq($(this).index()-1).offset().top-50;
					$("body").animate({scrollTop:offsetTop}, "slow");
					$(".fixbox div").html($(this).html());
					$(".fixbox div").css({
						display: 'block',
						color:"#fff",
						backgroundColor:colorArr[$(this).index()-1],
						top:($(this).index()-1)*51+"px"
					});
					if($(this).index()==1||$(this).index()==6){
						$(".fixbox div").addClass('four');
					}else{
						$(".fixbox div").removeClass('four');
					}
				}
			})
			$(".fixbox li").hover(function() {
				if($(this).index()<7){
					$(this).css({
						color: 'white',
						backgroundColor: colorArr[$(this).index()-1]
					});
				}
			}, function() {
				if($(this).index()<7){
					$(this).css({
						color: colorArr[$(this).index()-1],
						background:"none"
					});
				}
			});
		})
		// 轮播图2
		myAjax(host+"banner-top.txt",function(json){
		var kill=0;
		$.each(json, function(index, val) {
			if(kill>=6){
				return;
			}
			kill++;
			var li=$("<li></li>");
			// console.log(val.data.length)
			if(val.data.length==8){
				$.each(val.data,function(index, value) {
					var img=$("<img src='"+value.imgUrl+"' />");
					img.css({
						width: $(".lunbo-left-x").width()/4+"px",
						height:$(".lunbo-left-x").height()/2+"px"
					});
					li.append(img);
				});
			}else if(val.data.length==12){
				$.each(val.data,function(index, value) {
					var img=$("<img src='"+value.img+"' />");
					img.css({
						width: $(".lunbo-left-x").width()/4+"px",
						height:$(".lunbo-left-x").height()/3+"px"
					});
					li.append(img);
				});
			}else{
				if(val.data.length==5){
					$.each(val.data,function(index, value) {
						var img=$("<img src='"+value.content+"' />");
						if(index!=0){
							img.css({
								width: $(".lunbo-left-x").width()/3+"px",
								height: $(".lunbo-left-x").height()/2+"px"
							});
						}else{
							img.css({
								width: $(".lunbo-left-x").width()/3+"px"
							});
						}
						li.append(img);
					});
				}else{
					$.each(val.data,function(index, value) {
						var img=$("<img src='"+value.content+"' />");
						img.css({
							width: $(".lunbo-left-x").width()/val.data.length+"px",
						});
						li.append(img);
					});
				}
			}
			$(".hehe span.zuo").before(li);
		});
		$(".lunbo-left-x li").eq(0).css('left', '0');
	})

	$(function(){
		//补充效果
			// 我常逛的
			$(".cg-r img").hover(function() {
				$(this).css('opacity', '0.8');
			}, function() {
				$(this).css('opacity', '1');
			});


			$(".cg-r a:not('.tongyong')").hover(function() {
				$(this).children('span').css({color:"#f40",opacity:"1"});
			}, function() {
				$(this).children('span').css({color:"#000",opacity:'0.8'});
			});

			$(".cg-r .tongyong").hover(function() {
				$(this).children('span').children('i').addClass('f40');
				if($(this).parents(".c-box").index()>=2){
					$(this).children('span').css('backgroundColor', '#fff');
				}
			}, function() {
				$(this).children('span').children('i').removeClass('f40');
				if($(this).parents(".c-box").index()>=2){
					$(this).children('span').css('backgroundColor', 'rgba(255,255,255,.8)');
				}
			});

			$(".cg-r .not").hover(function() {
				$(this).children('span').stop().animate({height:70}, "fast");
			}, function() {
				$(this).children('span').stop().animate({height:24}, "fast");
			});
			$(".cg-l .bottom a").hover(function() {
				$(this).css({color:"#f40",backgroundColor:'rgba(255,255,255,1)'});
			}, function() {
				$(this).css({color:"#fff",backgroundColor:'rgba(255,255,255,0.2)'});
			});

			// 中间
			$(".mix ul li").hover(function() {
				$(this).css('borderColor', '#f40');
			}, function() {
				$(this).css('borderColor', '#eaeaea');
			});
			$(".mix .biga").hover(function() {
				$(this).children('img').css('opacity', '0.8');
			}, function() {
				$(this).children('img').css('opacity', '1');
			});
			$(".mix .tit").siblings().children('.smalla').hover(function() {
				$(this).children('span').css({color:"#f40",opacity:"1"});
			}, function() {
				$(this).children('span').css({color:"#000",opacity:'0.8'});
			});
			$(".text-box").hover(function() {
				$(this).children('a').children('img').css('opacity', '0.8');
				$(this).children('a').children('strong').css('color', '#f40');
				$(this).children('a').children('em').css('color', '#f40');
			}, function() {
				$(this).children('a').children('img').css('opacity', '1');
				$(this).children('a').children('strong').css('color', '#000');
				$(this).children('a').children('em').css('color', '#000');
			});
			//主题市场
			$(".shichang-nav").hover(function() {
				$(".shichang-nav .sbtb").stop().show("fast");
				$(".shichang-nav li").hover(function(index) {
					 $(".shichang-nav .sbtb>div").eq($(this).index()).siblings().css('display', 'none');
					 $(".shichang-nav .sbtb>div").eq($(this).index()).css('display', 'block');
				}, function(){

				});
			}, function() {
				$(".shichang-nav .sbtb").stop().hide("fast");
			});

			//轮播图
			var index=0;
			var index1=0;
			$(".lunbo-left-s .list li").click(function() {
				$(this).siblings().removeClass('licgcolor');
				$(this).addClass('licgcolor');
			if(index>$(this).index()){
				$(".lunbo-left-s li").eq(index).stop().animate({left:$(".lunbo-left-s").width()}, "slow");
				$(".lunbo-left-s li").css('left', -$(".lunbo-left-s").width()+'px');
				index=$(this).index();
				$(".lunbo-left-s li").eq(index).stop().animate({left:0}, "slow");
			}else{
				$(".lunbo-left-s li").eq(index).stop().animate({left:-$(".lunbo-left-s").width()}, "slow");
				$(".lunbo-left-s li").css('left', $(".lunbo-left-s").width()+'px');
				index=$(this).index();
				$(".lunbo-left-s li").eq(index).stop().animate({left:0}, "slow");
			}
			});
			$(".lunbo-left-x .list li").click(function() {
				$(this).siblings().removeClass('licgcolor');
				$(this).addClass('licgcolor');
			if(index1>$(this).index()){
				$(".lunbo-left-x li").eq(index1).stop().animate({left:$(".lunbo-left-x").width()}, "slow");
				$(".lunbo-left-x li").css('left', -$(".lunbo-left-x").width()+'px');
				index1=$(this).index();
				$(".lunbo-left-x li").eq(index1).stop().animate({left:0}, "slow");
			}else{
				$(".lunbo-left-x li").eq(index1).stop().animate({left:-$(".lunbo-left-x").width()}, "slow");
				$(".lunbo-left-x li").css('left', $(".lunbo-left-x").width()+'px');
				index1=$(this).index();
				$(".lunbo-left-x li").eq(index1).stop().animate({left:0}, "slow");
			}
			});
			var timer=setInterval(function(){
            	you($(".lunbo-left-s .lb li"),$(".lunbo-left-s .list li"));
			}, 3000)
			var timer2=setInterval(function(){
            	you1($(".lunbo-left-x .hehe li"),$(".lunbo-left-x .list li"));
			}, 3000)
			$(".lunbo-left-s").hover(function() {
				clearInterval(timer);
				$(".lunbo-left-s .zuo,.lunbo-left-s .you").show();
			}, function() {
				$(".lunbo-left-s .zuo,.lunbo-left-s .you").hide();
				timer=setInterval(function(){
            		you($(".lunbo-left-s .lb li"),$(".lunbo-left-s .list li"));
				}, 3000);
			});
			$(".lunbo-left-x").hover(function() {
				clearInterval(timer2);
				$(".lunbo-left-x span").show();
			}, function() {
				$(".lunbo-left-x span").hide();
				timer2=setInterval(function(){
            		you1($(".lunbo-left-x .hehe li"),$(".lunbo-left-x .list li"));
				}, 3000)
			});
			$(".lunbo-left-s .zuo").click(function() {
				zuo($(".lunbo-left-s .lb li"),$(".lunbo-left-s .list li"));
			});
			$(".lunbo-left-x .zuo").click(function() {
				zuo1($(".lunbo-left-x .hehe li"),$(".lunbo-left-x .list li"));
			});
			$(".lunbo-left-s .you").click(function() {
				you($(".lunbo-left-s .lb li"),$(".lunbo-left-s .list li"));
			});
			$(".lunbo-left-x .you").click(function() {
				you1($(".lunbo-left-x .hehe li"),$(".lunbo-left-x .list li"));
			});
			function you(obj,obj2){
				obj.eq(index).stop().animate({left:-obj.width()}, "slow");
				index++;
				if(index>=obj.length){
					index=0;
				}
				obj.css('left', obj.parent().width()+'px');
				obj.eq(index).stop().animate({left:0}, "slow");
				obj2.eq(index).siblings().removeClass('licgcolor');
				obj2.eq(index).addClass('licgcolor');
			}
			function you1(obj,obj2){
				obj.eq(index1).stop().animate({left:-obj.width()}, "slow");
				index1++;
				if(index1>=obj.length){
					index1=0;
				}
				obj.css('left', obj.parent().width()+'px');
				obj.eq(index1).stop().animate({left:0}, "slow");
				obj2.eq(index1).siblings().removeClass('licgcolor');
				obj2.eq(index1).addClass('licgcolor');
			}
			function zuo(obj,obj2){
				obj.eq(index).stop().animate({left:obj.width()}, "slow");
				index--;
				if(index<0){
					index=obj.length-1;
				}
				obj.css('left', -obj.parent().width()+'px');
				obj.eq(index).stop().animate({left:0}, "slow");
				obj2.eq(index).siblings().removeClass('licgcolor');
				obj2.eq(index).addClass('licgcolor');
			}
			function zuo1(obj,obj2){
				obj.eq(index1).stop().animate({left:obj.width()}, "slow");
				index1--;
				if(index1<0){
					index1=obj.length-1;
				}
				obj.css('left', -obj.parent().width()+'px');
				obj.eq(index1).stop().animate({left:0}, "slow");
				obj2.eq(index1).siblings().removeClass('licgcolor');
				obj2.eq(index1).addClass('licgcolor');
			}
			//中国大陆
			$(".zhongguodalu").hover(function() {
				$(".dalu").show();
			}, function() {
				$(".dalu").hide();
			});
			$(".dalu li").click(function(){
				$(".zhongguodalu .zhong").html($(this).html());
			})
			//网站导航
			$(".web-nav").hover(function() {
				$(".web-ul").css('display', 'block');
			}, function() {
				$(".web-ul").css('display', 'none');
			});
			//充话费
			$(".tb-hi4 li:lt(4)").hover(function() {
				$(this).parent().siblings().children().css({borderColor:'#f5f5f5',zIndex:1});
				$(this).css({borderColor:'#f40',borderBottomColor:"#fff",zIndex:3});
				$(".tb-hi4 .content").eq($(this).parent().index()).show(100);
				$(".tb-hi4 .content").eq($(this).parent().index()).siblings(".content").hide();
			}, function() {
				// $(this).css({borderColor:'#f5f5f5',zIndex:1});
			});
			$(".tb-hi4 .content").on("mouseleave",function(){
				$(this).hide();
				$(".tb-hi4ul a").eq($(this).index()-1).children().css({borderColor:'#f5f5f5',zIndex:1});
			})
				$(".tb-hi4 .content").eq($(this).parent().index()).hide();
			$(".tb-hi4 .con-tit a").hover(function() {
				var index=$(this).index();
				$(".con-ul").stop().animate({left:-index*$(".con-ul li").width()}, "fast")
				$(this).css('color', '#f40').siblings().css('color',"#666");
			});
	})
