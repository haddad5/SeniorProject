package api;

import java.util.List;
import java.util.Map;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


@Path("/trips")
public class TableData {
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Map> getTableData() {
		
		SqliteDB db = new SqliteDB();
		List<Map> resource = db.getTrips();
		db.closeConnection();
		return resource;
		
	}
	
}
