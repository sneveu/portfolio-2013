define(["jquery","router","controller/app_controller","model/app_model","model/projects_model","view/about","view/work_list","view/work_piece","util/view_helpers"],function(e,t,n,r,i,s,o,u,a){var f,l;return{rootNode:e("#rootNode"),views:[],projectName:null,currentView:null,start:function(){l=e("#work_list"),f=Handlebars.compile(l.html()),l.html(f({projects:i.toJSON()}));var n=e("#work_list_thumbs_holder").text();e("#work_list_thumbs").html(n);var a=e("#work_list_holder").text();e("#work_list ul").html(a);var c=e("#header_holder").text();e("#head").html(c),r.on("change:page",this.onAppModelPage,this),t.setRoutes([["",r.PAGES.ABOUT],[/^([0-9]+)\/([0-9]+)$/,r.PAGES.ABOUT],["home/:width/:height",r.PAGES.ABOUT],["about",r.PAGES.ABOUT],["work",r.PAGES.WORKLIST],["work/:project",r.PAGES.WORKPIECE]]),this.views[r.PAGES.ABOUT]=new s({el:this.rootNode}),this.views[r.PAGES.WORKLIST]=new o({el:this.rootNode}),this.views[r.PAGES.WORKPIECE]=new u({el:this.rootNode}),t.start(),e("section#work_list a").mousedown(_.bind(function(e){this.onWorkListItemClick(e)},this)),e("#head a").mouseover(_.bind(function(e){this.onNavItemHover(e)},this)),e("#head a").mouseout(_.bind(function(e){this.onNavItemRolloff(e)},this))},onAppModelPage:function(e,t){this.currentView&&this.currentView.transitionOut&&this.currentView.transitionOut(),this.currentView=this.views[t];switch(t){case r.PAGES.ABOUT:this.currentView.render();break;case r.PAGES.WORKLIST:this.currentView.render();break;case r.PAGES.WORKPIECE:this.currentView.render(this.projectName)}},onWorkListItemClick:function(e){this.projectName=e.currentTarget.id},onNavItemHover:function(t){var n=t.currentTarget.id;n=="nav_about"?e("#head #title").html("Bio"):n=="nav_work"?e("#head #title").html("Work"):n=="nav_notes"?e("#head #title").html("Notes"):n=="nav_contact"&&e("#head #title").html("Email me")},onNavItemRolloff:function(){e("#head #title").html("Simon Neveu")}}});