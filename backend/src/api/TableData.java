package api;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


@Path("/trips")
public class TableData {
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getTableData() {
		SqliteDB db = null;
		List<Map> resource = null;
		try {
			db = new SqliteDB();
			resource = db.getTrips();
			return Response.ok(resource, MediaType.APPLICATION_JSON).build();
		} catch(Throwable e) {
			e.printStackTrace();
			return Response.serverError().build();
		} finally {
			if(db != null)
				db.closeConnection();
		}
		
	}
	
}
