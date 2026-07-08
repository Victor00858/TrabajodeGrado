import numpy as np
import pandas as pd

measurement_data = pd.read_csv('./measurement_data1.csv')
size = measurement_data.shape[0]
index = 0
end = 200000

for i in range(7):
    script = ''
    data_truncate = measurement_data.iloc[index:end, :].values
    for row in data_truncate:
        script+='INSERT INTO measurement_data(id,value,value_types_id, measurements_id, units_id)  VALUES '+ f'({row[0]},{row[1]},{row[2]},{row[3]},{row[4]});\n'
    index = end
    end = end + 100000 if end-100000 <  size else -(end-size+1441)

    with open(f'measurements_data{i}.sql', 'w') as archivo:
        archivo.write(script)