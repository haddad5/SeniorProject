package api;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SqliteDB {
	
	Connection c = null;
	Statement stmt = null;
	
	public SqliteDB() {
		try {
			
			Class.forName("org.sqlite.JDBC");
			c = DriverManager.getConnection("jdbc:sqlite:/home/camping.db");
			System.out.println("Connected!");
			
		} catch(Exception ex) {
			ex.printStackTrace();
		}
	}
	
	public List<Map> getTrips() {
		try {
			
			this.stmt = c.createStatement();
			ResultSet rs = stmt.executeQuery("SELECT * FROM trips;");
			
			List<Map> arr = new ArrayList<Map>();
			
			while(rs.next()) {
				
				Map row = new HashMap();
				
				row.put("id", rs.getInt("id"));
				row.put("name", rs.getString("name"));
				row.put("description", rs.getString("description"));
				row.put("city", rs.getString("city"));
				row.put("state", rs.getString("state"));
				row.put("difficulty", rs.getInt("difficulty"));
				row.put("activities", rs.getString("activities"));
				
				arr.add(row);
			}
			
			return arr;
			
		} catch(Exception ex) {
			ex.printStackTrace();
			return null;
		}
	}
	
	public void closeConnection() {
		try {
			
			c.close();
			System.out.println("Disconnected.");
			
		} catch(Exception ex) {
			ex.printStackTrace();
		}
	}
}