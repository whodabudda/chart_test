
class GchartController < ApplicationController
	def show 
#		def annotated_time_line
=begin
<!-- Specify the size of the Container element explicitly! 
  <div id='anotated_time_line' style='width: 800px; height: 300px;'></div>

  <%=  render_chart @anotated_time_line, 'anotated_time_line'  %>
  <div id='anotated_chart' style='width: 800px; height: 300px;'></div>
  <%=  render_chart @anotated_chart, 'anotated_chart'%>
-->

rescue Exception => e
	
end
	data_table = GoogleVisualr::DataTable.new
	data_table.new_column('datetime', 'Date/Time')
	data_table.new_column('number', 'BP Systolic')
    data_table.new_column('number', 'BP Diastolic')
    data_table.new_column('number', 'Pulse')
	data_table.new_column('number', 'Event')
    data_table.new_column('string', 'Event Text')
	data_table.new_column('string', 'Event Description')
   data_table.add_rows(
      [
        [DateTime.parse("2314-2-15 00:00:00"), 100,70,40,0,nil,nil],
		[DateTime.parse("2314-2-15 09:00:00"), 150,80,60,0,nil,nil],
        [DateTime.parse("2314-2-15 10:00:00"), 150,80,60,0,'Gym','moderate'],
		[DateTime.parse("2314-2-15 13:00:00"), 150,80,40,0,'Golf','9 holes'],
		[DateTime.parse("2314-2-15 18:00:00"), 120,70,60,0,nil,nil],
        [DateTime.parse("2314-2-16 09:00:00"), 150,80,60,0,nil,nil],
        [DateTime.parse("2314-2-17 13:00:00"), 150,80,60,0,'Gym','moderate'],
		[DateTime.parse("2314-2-18 12:00:00"), 120,70,60,0,nil,nil],
		[DateTime.parse("2314-2-18 15:00:00"), 120,70,60,0,'Golf','9 holes'],
      
      ]
    )

			opts   = { :displayAnnotations => true }
			@anotated_time_line = GoogleVisualr::Interactive::AnnotationChart.new(data_table, opts)

#		end	
#		def anotated_chart

			data_table = GoogleVisualr::DataTable.new
			data_table.new_column('datetime'  , 'Date')
			data_table.new_column('number', 'Attendance')
			data_table.add_rows(
			  [
				[DateTime.parse("2012-03-13 09:00:00"), 37032],
				[DateTime.parse("2012-03-13 13:00:00"), 37099],
				[DateTime.parse("2012-3-14"), 38024],
				[DateTime.parse("2012-3-15"), 38024],
				[DateTime.parse("2012-3-16"), 38108],
				[DateTime.parse("2012-3-17"), 38229],
				[DateTime.parse("2013-9-4") , 38177],
				[DateTime.parse("2013-9-5") , 38705],
				[DateTime.parse("2013-9-12"), 38210],
				[DateTime.parse("2013-9-13"), 38029],
				[DateTime.parse("2013-9-19"), 38823],
				[DateTime.parse("2013-9-23"), 38345],
				[DateTime.parse("2013-9-24"), 38436],
				[DateTime.parse("2013-9-30"), 38447]
			  ]
			)

			opts   = { :title => "Red Sox Attendance", :width => 800, :height => 300, calendar: { cellSize: 13.5 } }
			@anotated_chart = GoogleVisualr::Interactive::Calendar.new(data_table, opts)

	#	  end

=end	
	end	

end
