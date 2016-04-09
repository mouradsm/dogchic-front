export default{
	data: {
		clientes: []
	},
	ready: function() {
		this.getClientes();
	},
 	methods: {
 		getClientes: function(){
 			this.$http.get('http://localhost:8000/api/clientes', function(response, status, request){
 				if(status == 200){
 					this.$set('clientes', response.data); 			
 				}
 			});

 			
 		}
 	}
}