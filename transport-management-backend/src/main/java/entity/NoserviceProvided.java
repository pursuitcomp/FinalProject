package entity;

public class NoserviceProvided extends Exception {
String msg;
String city="St charles";

	
		// TODO Auto-generated method stub
		
		public  NoserviceProvided() {	
			if(!city.equals("stlouis")) {
				
				try {
					throw new NoserviceProvided();
				} catch (NoserviceProvided e) {
					// TODO Auto-generated catch block
					e.msg="Service not available in your city";
				}
			}
			
		}
		
	

	

}
