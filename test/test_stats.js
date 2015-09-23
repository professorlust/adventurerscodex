describe('Stats', function() {
	describe('Health', function() {
		describe('Clear', function() {
			it('should clear all the values in stats', function() {
				var stats = new Stats();
				stats.health.damage(10);
				stats.health.clear();
				stats.health.damage().should.equal(0);
			});
		});
	
		describe('Hitpoints', function() {
			it('should calculate the correct remaining hitpoints', function() {
				var stats = new Stats();
				stats.health.maxHitpoints(10);
				stats.health.tempHitpoints(5);
				stats.health.damage(8);
				stats.health.hitpoints().should.equal(7);
			});
		});
	
		describe('Total Hitpoints', function() {
			it('should calculate the correct total hitpoints', function() {
				var stats = new Stats();
				stats.health.maxHitpoints(10);
				stats.health.tempHitpoints(5);
				stats.health.damage(0);
				stats.health.hitpoints().should.equal(15);
			});
		});
	
		describe('Temp Hitpoints Remaining', function() {
			it('should calculate the correct remaining temporary hitpoints', function() {
				var stats = new Stats();
				stats.health.maxHitpoints(10);
				stats.health.tempHitpoints(5);
				stats.health.damage(4);
				stats.health.tempHitpointsRemaining().should.equal(1);
			});
		});
	
		describe('Regular Hitpoints Remaining', function() {
			it('should calculate the correct remaining regular hitpoints', function() {
				var stats = new Stats();
				stats.health.maxHitpoints(10);
				stats.health.tempHitpoints(5);
				stats.health.damage(8);
				stats.health.regularHitpointsRemaining().should.equal(7);
			});
		});
	
		describe('KO?', function() {
			it('should calculate if the player is KO\'d', function() {
				var stats = new Stats();
				stats.health.maxHitpoints(10);
				stats.health.tempHitpoints(5);
				stats.health.damage(8);
				stats.health.isKnockedOut().should.equal(false);
				stats.health.damage(15);
				stats.health.isKnockedOut().should.equal(true);
			});
		});

		describe('Danger?', function() {
			it('should calculate if the player is in danger health-wise', function() {
				var stats = new Stats();
				stats.health.maxHitpoints(10);
				stats.health.tempHitpoints(5);
				stats.health.damage(8);
				stats.health.isDangerous().should.equal(false);
				stats.health.damage(14);
				stats.health.isDangerous().should.equal(true);
			});
		});

		describe('Warning?', function() {
			it('should calculate if the player\'s health is getting low.', function() {
				var stats = new Stats();
				stats.health.maxHitpoints(10);
				stats.health.tempHitpoints(5);
				stats.health.damage(8);
				stats.health.isWarning().should.equal(false);
				stats.health.damage(13);
				stats.health.isWarning().should.equal(true);
			});
		});

		describe('Progress Type?', function() {
			it('should give the progress bar type for the hp bar', function() {
				var stats = new Stats();
				stats.health.maxHitpoints(10);
				stats.health.tempHitpoints(5);
				stats.health.damage(8);
				stats.health.progressType().should.equal('progress-bar-success');
				stats.health.damage(13);
				stats.health.progressType().should.equal('progress-bar-warning');
				stats.health.damage(14);
				stats.health.progressType().should.equal('progress-bar-danger');
			});
		});

		describe('Progress Label?', function() {
			it('should give the progress bar label for the hp bar', function() {
				var stats = new Stats();
				stats.health.maxHitpoints(10);
				stats.health.tempHitpoints(5);
				stats.health.damage(13);
				stats.health.progressLabel().should.equal('');
				stats.health.damage(15);
				stats.health.progressLabel().should.equal('K.O.');
			});
		});

		describe('Export', function() {
			it('should yield an object with all the info supplied.', function() {
				var stats = new Stats();
				stats.health.maxHitpoints(10);
				stats.health.tempHitpoints(5);
				stats.health.damage(13);
				var e = stats.health.exportValues();
				e.maxHitpoints.should.equal(10);
				e.tempHitpoints.should.equal(5);
				e.damage.should.equal(13);
			});
		});
		
		describe('Import', function() {
			it('should import an object with all the info supplied.', function() {
				var val = {
					maxHitpoints: 10,
					tempHitpoints: 5,
					damage: 13
				};
				var stats = new Stats();
				stats.health.importValues(val);
				stats.health.maxHitpoints().should.equal(val.maxHitpoints);
				stats.health.tempHitpoints().should.equal(val.tempHitpoints);
				stats.health.damage().should.equal(val.damage);
			});
		});
	});
});