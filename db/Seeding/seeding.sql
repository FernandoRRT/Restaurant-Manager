INSERT INTO transaction_settings
(id, statement_name, soft_descriptor, fran_chg, process_day, process_period_id, df_transaction_fee, site_transaction_fee, v_percent, m_percent, a_percent, d_percent, one_Off_v_percent, one_Off_m_percent, one_Off_a_percent, one_Off_d_percent, b_fail_fee, cc_fail_fee, site_fail_fee, site_b_fail_fee, site_cc_fail_fee, fee_combo, disbursement, sms_fail, email_fail, cus_type, cancel_date, suffix, df_one_off_fee, df_auto_retry_fee, ddr)
VALUES(uuid_generate_v4(), 'RWC333', 'RWC333', NULL, NULL, (select id from process_period pp where pp.name = 'Daily'), 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, false, false, false, NULL, NULL, NULL, NULL, NULL, NULL);

INSERT INTO bank_info
(id, acc_name, bsb, acc_number, bank_id, created, updated)
VALUES(uuid_generate_v4(), 'Alex Bocardi', '001', '123456', (select id from banks b where b.nickname = 'CBA'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO contact
(id, mobile, mobile_verified, landline, email, email_verified, is_default, address, created, updated)
VALUES(uuid_generate_v4(), '0491724590', true, null, 'alex@rwc333.com.au', true, true, '007 Perkata st, buderim, QLD, Australia', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO business
(id, parent_id, company_name, abn, acn, is_franchise, structure_id, default_bank_info_id, contact_id, created, updated)
VALUES(uuid_generate_v4(), NULL, 'RWC333', '51824753556', '53556', false, (select id from business_structure bs where bs."name" = 'Sole Trader'), (select id from bank_info bi where bi.acc_name = 'Alex Bocardi'), (select id from contact c where c.mobile = '0491724590'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO site
(id, business_id, site_name, reg_trading, is_default, contact_id, bank_info_id, created, updated)
VALUES(uuid_generate_v4(), (select id from business b where b.company_name = 'RWC333'), 'Mobile Mechanic 1', 'reg_trading', true, null, null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO public.facilities
(id, site_id, transaction_settings_id, "name", description, created, updated)
VALUES(uuid_generate_v4(), (select s.id from site s where s.site_name = 'Mobile Mechanic 1'), (select id from transaction_settings ts where ts.soft_descriptor = 'RWC333'), 'Van Plate 123456', 'Mobile car 1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
