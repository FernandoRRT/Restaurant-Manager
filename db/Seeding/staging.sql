INSERT INTO support_ticket_updates (id, ticket, message, status, metadata, updated_by, created, updated) VALUES
('fb250d0a-3b88-4ac0-b281-c06a70256fd7', '01-20250504-BZF0ORQ1', 'I dont what to say.', 'pending', '{"id": "5a071ad9-df89-4f73-942e-752382f26c58", "site": {"id": "7fc167e9-e23d-43ae-b09a-3d65512b818d", "siteName": "Orlando Site"}, "user": {"id": "4d89c1d7-5a7b-4754-a670-a32ad7dace9a", "login": "Fernando"}, "status": "pending", "ticketNumber": "01-20250504-BZF0ORQ1"}', 'FintechAdmin', '2025-05-04 23:49:24.912 -0300', '2025-05-04 23:49:24.912 -0300'),
('f803d383-2ec1-4014-8c83-fb1523ac3b88', '01-20250504-BZF0ORQ1', 'Teste', 'pending', '{"id": "5a071ad9-df89-4f73-942e-752382f26c58", "site": {"id": "7fc167e9-e23d-43ae-b09a-3d65512b818d", "siteName": "Orlando Site"}, "user": {"id": "4d89c1d7-5a7b-4754-a670-a32ad7dace9a", "login": "Fernando"}, "status": "pending", "ticketNumber": "01-20250504-BZF0ORQ1"}', 'FintechAdmin', '2025-05-05 00:13:00.925 -0300', '2025-05-05 00:13:00.925 -0300'),
('f41bd61e-0cf8-4056-87d1-63a3584ec79a', '01-20250504-BZF0ORQ1', 'Please work this time.', 'pending', '{"id": "5a071ad9-df89-4f73-942e-752382f26c58", "site": {"id": "7fc167e9-e23d-43ae-b09a-3d65512b818d", "siteName": "Orlando Site"}, "user": {"id": "4d89c1d7-5a7b-4754-a670-a32ad7dace9a", "login": "Fernando"}, "status": "pending", "ticketNumber": "01-20250504-BZF0ORQ1"}', 'FintechAdmin', '2025-05-05 00:14:21.332 -0300', '2025-05-05 00:14:21.332 -0300'),
('98f1fb2c-bcc6-42b4-b96f-269bbc433165', '01-20250504-BZF0ORQ1', 'Teste', 'approved', '{"id": "5a071ad9-df89-4f73-942e-752382f26c58", "site": {"id": "7fc167e9-e23d-43ae-b09a-3d65512b818d", "siteName": "Orlando Site"}, "user": {"id": "4d89c1d7-5a7b-4754-a670-a32ad7dace9a", "login": "Fernando"}, "status": "approved", "ticketNumber": "01-20250504-BZF0ORQ1"}', 'FintechAdmin', '2025-05-05 01:55:50.543 -0300', '2025-05-05 01:55:50.543 -0300');

INSERT INTO staging_bankings (id, acc_name, bsb, acc_number, bank_id, already_registered, created, updated)
VALUES
('91bfa8b5-1c1e-462e-9231-9d4575f9dd23', 'Mickey Mouse', '666666', '1234567899', '94b67932-3d3f-4729-9baf-16289bebde36', NULL, '2025-05-04 23:24:45.218 -0300', '2025-05-05 00:14:25.154 -0300'),
('de243d1e-b873-4aa9-a2a7-60f3f26723c4', 'Teste', '044444', '47188444', '89e04c53-cc53-481a-8ada-23e077bf2f22', NULL, '2025-05-09 00:06:15.317 -0300', '2025-05-09 00:06:15.317 -0300'),
('d7caef3c-187d-42e8-9f27-ce7456288b43', '1312312321', '324366', '432423', '40522b13-fee2-4dac-ab0a-3834894dce75', NULL, '2025-05-09 00:55:41.571 -0300', '2025-05-09 00:55:41.571 -0300'),
('739e80ab-bbfd-4149-a0e8-3d387fdc9e9d', 'Teste', '343234', '5632532523', 'd20bc3ca-ca08-4d3a-8dac-2deb580452a4', NULL, '2025-05-10 23:54:32.493 -0300', '2025-05-10 23:54:32.493 -0300');


INSERT INTO staging_contacts (id, mobile, email, address, created, updated) VALUES
('ea7f5e4d-ccb9-45c1-a976-ede8f54a42b9', '0411111222', NULL, 'Disney World, Vineland Road, Orlando, FL, USA', '2025-05-04 23:24:45.218 -0300', '2025-05-04 23:24:45.218 -0300'),
('97b95b97-357d-42fc-ae9e-59f65d951ba7', '0484512654', NULL, 'North Pole, Greenwich High Road, London, UK', '2025-05-04 23:24:45.218 -0300', '2025-05-04 23:24:45.218 -0300'),
('07d75904-0af7-4081-a811-65d2819b0c6b', '0411544816', NULL, 'North Pole Road, London, UK', '2025-05-09 00:06:15.317 -0300', '2025-05-09 00:06:15.317 -0300'),
('03661688-b577-405e-980a-382948e0721d', '0499326177', NULL, 'North Sentinel Island, Andaman and Nicobar Islands', '2025-05-09 00:06:15.317 -0300', '2025-05-09 00:06:15.317 -0300'),
('928c3204-5c75-4da3-915d-ab2fcc69cdc3', '0455135788', NULL, 'Rua Sem Fim - Bairro Canedos, Piracaia - State of São Paulo, Brazil', '2025-05-09 00:55:41.571 -0300', '2025-05-09 00:55:41.571 -0300'),
('4f96ae43-569e-444f-a136-0db0dc66e9fb', '0415266777', NULL, 'Rua Sem Fim, Santa Cruz Cabrália - State of Bahia, Brazil', '2025-05-09 00:55:41.571 -0300', '2025-05-09 00:55:41.571 -0300'),
('6faa73bd-e87a-4a63-89c2-9282731dbeb2', '0412244884', NULL, 'Plattform 32, Habsburgerstrasse, Lucerne, Switzerland', '2025-05-10 23:54:32.493 -0300', '2025-05-10 23:54:32.493 -0300'),
('69fd4ce0-7d58-4868-b5a6-f70c001fa22b', '0418444516', NULL, 'Plattform 32, Habsburgerstrasse, Lucerne, Switzerland', '2025-05-10 23:54:32.493 -0300', '2025-05-10 23:54:32.493 -0300');


INSERT INTO staging_business (id, company_name, abn, acn, structure_id, default_bank_info_id, contact_id, already_registered, created, updated)
VALUES
('9399c0a5-0a6e-4552-8238-59120d9ebc9e', 'Disney', '83783686257', '', '5f1a4834-41f0-47fb-a73d-3549a0da66d7', '91bfa8b5-1c1e-462e-9231-9d4575f9dd23', 'ea7f5e4d-ccb9-45c1-a976-ede8f54a42b9', NULL, '2025-05-04 23:24:45.218 -0300', '2025-05-05 00:14:24.931 -0300'),
('c2071669-fd81-47d2-baf5-21707e21b93b', 'Avengers', '90395545887', '', '63288068-1d9d-4e08-862d-60f601777189', 'de243d1e-b873-4aa9-a2a7-60f3f26723c4', '07d75904-0af7-4081-a811-65d2819b0c6b', NULL, '2025-05-09 00:06:15.317 -0300', '2025-05-09 00:06:15.317 -0300'),
('a3c3d183-be67-4d0d-ac53-340035732f8e', 'dsadsad', '37464460315', '', '5f1a4834-41f0-47fb-a73d-3549a0da66d7', 'd7caef3c-187d-42e8-9f27-ce7456288b43', '928c3204-5c75-4da3-915d-ab2fcc69cdc3', NULL, '2025-05-09 00:55:41.571 -0300', '2025-05-09 00:55:41.571 -0300'),
('eb792579-8863-45da-b247-a50f169a85fd', 'Disney', '83783686257', '', '5f1a4834-41f0-47fb-a73d-3549a0da66d7', '739e80ab-bbfd-4149-a0e8-3d387fdc9e9d', '6faa73bd-e87a-4a63-89c2-9282731dbeb2', '78b5cafe-cbb2-4a75-afba-3880cf517294', '2025-05-10 23:54:32.493 -0300', '2025-05-10 23:54:32.493 -0300');

INSERT INTO staging_site (id, business_id, site_name, reg_trading, contact_id, bank_info_id, created, updated) VALUES
('7fc167e9-e23d-43ae-b09a-3d65512b818d', '9399c0a5-0a6e-4552-8238-59120d9ebc9e', 'Orlando Site', NULL, NULL, NULL, '2025-05-04 23:24:45.218 -0300', '2025-05-04 23:24:45.218 -0300'),
('18096b14-5f5a-4978-836b-d9e7be9ec230', 'c2071669-fd81-47d2-baf5-21707e21b93b', 'Avenger Tower', NULL, NULL, NULL, '2025-05-09 00:06:15.317 -0300', '2025-05-09 00:06:15.317 -0300'),
('ae54ec67-3d47-466a-a8a1-bf00d3a206a7', 'a3c3d183-be67-4d0d-ac53-340035732f8e', 'dsadsada', NULL, NULL, NULL, '2025-05-09 00:55:41.571 -0300', '2025-05-09 00:55:41.571 -0300'),
('e51c3617-4ad7-4f58-89ee-3212bac7b877', 'eb792579-8863-45da-b247-a50f169a85fd', 'Disney', 'Teste', NULL, NULL, '2025-05-10 23:54:32.493 -0300', '2025-05-10 23:54:32.493 -0300');


INSERT INTO staging_user (id, login, password, first_name, middle_name, last_name, contact_id, created, updated) VALUES
('4d89c1d7-5a7b-4754-a670-a32ad7dace9a', 'Fernando', '$2b$10$FyCA20ElGA2ghoB7GMW3AOlsCVgWHpLKkHvv7n93u.8.qDVQR3HJu', 'Fernando', NULL, 'Torres', '97b95b97-357d-42fc-ae9e-59f65d951ba7', '2025-05-04 23:24:45.218 -0300', '2025-05-04 23:24:45.218 -0300'),
('0791e9de-f895-4555-88e1-7106b6046680', 'Hulk', '$2b$10$bgcrVhBKF7.7i9IOSLh8pO4a6zkW0sd3z8fJcvQxbhKqFIxhga0i.', 'Hulk', NULL, 'Hogan', '03661688-b577-405e-980a-382948e0721d', '2025-05-09 00:06:15.317 -0300', '2025-05-09 00:06:15.317 -0300'),
('1f06fc45-5d04-4656-887f-86c30d0f98fc', 'Mark', '$2b$10$ZV7Mk7Patse0qS1DbytQp.5je/689CKkNHWXw2E8qFY5h9SDsfN0a', 'JJID', NULL, 'dsad', '4f96ae43-569e-444f-a136-0db0dc66e9fb', '2025-05-09 00:55:41.571 -0300', '2025-05-09 00:55:41.571 -0300'),
('68823ddf-4540-40f7-9729-72fcac33f65b', 'fernando', '$2b$10$tMjHQWMRLT./86.MSLcI7.7wsdli7KV7HzIxK/oOpjAnpUHY2o4P6', 'Fernando', NULL, 'Torres', '69fd4ce0-7d58-4868-b5a6-f70c001fa22b', '2025-05-10 23:54:32.493 -0300', '2025-05-10 23:54:32.493 -0300');

INSERT INTO staging_enroll (id, ticket_number, status, created, updated, company_id, user_id, site_id) VALUES
('16675e27-22d2-4ccb-bed5-1f2a05b4923f', '01-20250504-BZF0ORQ1', 'approved', '2025-05-04 23:24:45.218 -0300', '2025-05-05 02:09:43.499 -0300', '9399c0a5-0a6e-4552-8238-59120d9ebc9e', '4d89c1d7-5a7b-4754-a670-a32ad7dace9a', '7fc167e9-e23d-43ae-b09a-3d65512b818d'),
('9581b251-584d-40a6-970c-580e28e39554', '01-20250509-VY3LXL4Z', 'pending', '2025-05-09 00:06:15.317 -0300', '2025-05-09 00:52:13.758 -0300', 'c2071669-fd81-47d2-baf5-21707e21b93b', '0791e9de-f895-4555-88e1-7106b6046680', '18096b14-5f5a-4978-836b-d9e7be9ec230'),
('375f1b2b-1a5a-469c-a602-018990dd9fcb', '01-20250509-1T7Z3TPO', 'pending', '2025-05-09 00:55:41.571 -0300', '2025-05-09 01:22:13.129 -0300', 'a3c3d183-be67-4d0d-ac53-340035732f8e', '1f06fc45-5d04-4656-887f-86c30d0f98fc', 'ae54ec67-3d47-466a-a8a1-bf00d3a206a7'),
('f283b43e-53a2-4414-8333-d2e6c7e40625', '01-20250510-9Y94X6E8', 'pending', '2025-05-10 23:54:32.493 -0300', '2025-05-10 23:54:32.493 -0300', 'eb792579-8863-45da-b247-a50f169a85fd', '68823ddf-4540-40f7-9729-72fcac33f65b', 'e51c3617-4ad7-4f58-89ee-3212bac7b877');
