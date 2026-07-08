
use losses_db;

CREATE OR REPLACE VIEW V_MEASUREMENTS_PER_MINUTE AS
SELECT 
	m.date AS fecha,
    m.id AS idMedicion,
	t.name AS tanque,
	t.d AS DiametroTanque,
	t.hro AS EspacioTanque,
	t.hnx AS HLX,
	t.hnn AS HLN,
	t.hs AS AlturaTanque,
	t.alfa AS CantidadRadiaciónAbsorvida,
	t.isolated AS estaAislado,
    data.value AS mediciones,
    vt.id AS idTipo,
    vt.name  AS tipoMedicion,
	u.symbol AS unidades,
	s.name AS sustancia,
	s.pm_vapor AS PesoMolecularVapor,
	s.A AS A,
	s.B AS B,
	s.Kc AS EfectoProductoAlmacenado
FROM
	losses_db.measurements m
	JOIN losses_db.measurement_data data ON m.id = data.measurements_id
	JOIN losses_db.substances s ON s.id = m.substances_id
	JOIN losses_db.units u ON u.id = data.units_id
	JOIN losses_db.tanks t ON t.id = m.tanks_id
	JOIN losses_db.value_types vt ON vt.id = data.value_types_id
ORDER BY m.date ASC;
