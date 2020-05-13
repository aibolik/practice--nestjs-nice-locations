import { Test, TestingModule } from '@nestjs/testing';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';

describe('LocationController', () => {
  let locationController: LocationController;

  beforeEach(async () => {
    locationController = new LocationController(new LocationService());
  });

  describe('root', () => {
    it('should list locations"', () => {
      expect(locationController.listLocations()).toMatchObject({
        locations: [
          'Location 1',
          'Location 2',
          'Location 3',
        ]
      });
    });
  });
});
